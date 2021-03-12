import { promises as fs } from 'fs';
import * as semver from 'semver';
import { DOMParser, XMLSerializer } from 'xmldom';

import { render as render_svg } from 'svgexport';

const Settings = {
  json_spaces: 2,
};

interface PartialPackageJson {
  version: string;
}

type McpackVersion = Array<number>;

interface PartialMcpackManifestComponent {
  uuid: string;
  version: McpackVersion;
}

interface PartialMcpackManifestJson {
  header: PartialMcpackManifestComponent;
  modules?: Array<PartialMcpackManifestComponent>;
  dependencies?: Array<PartialMcpackManifestComponent>;
}

const mcpack_uuid_set = new Set<string>([
  // oomc_fun_bp header
  'd1680ac8-ceb7-4ff1-bf1c-aa447ff1ccc0',

  // oomc_fun_bp module
  '912adbfd-0e92-4f82-8436-7e6f7021c4da',

  // oomc_fun_rp header
  '7df75aab-0326-4ce8-8a24-959e4d0b9125',

  // oomc_fun_rp module
  '39847d56-32da-40cc-8bc4-e33d74026219',

  // oomc_fun_sp header
  '4e04d1d2-878d-4d49-b9f0-d8e8e2ab348d',

  // oomc_fun_sp module
  '44582e6c-55ce-4595-b8ae-f8e8bd0129d0',
]);

const package_version = async () => {
  const content = await fs.readFile('package.json', 'utf-8');
  const package_json = JSON.parse(content) as PartialPackageJson;
  const version_string = package_json.version;

  const ver_obj = semver.parse(version_string);
  if (!ver_obj) {
    throw new TypeError(
      'Invalid version string in package.json: ' + String(version_string)
    );
  }

  return ver_obj;
};

const mcpack_version_to_semver = (
  mcpack_version: McpackVersion
): semver.SemVer | null => {
  return mcpack_version.length == 3
    ? semver.parse(mcpack_version.join('.'))
    : null;
};

const semver_to_mcpack_version = (ver_obj: semver.SemVer): McpackVersion => {
  return [ver_obj.major, ver_obj.minor, ver_obj.patch];
};

const process_mcpack_icon = async (
  ver_obj: semver.SemVer,
  svg_path: string,
  png_path: string
) => {
  const contents = await fs.readFile(svg_path, 'utf-8');
  const doc = new DOMParser().parseFromString(contents);
  const tspan_ = doc.getElementById('tspan_pack_version');
  if (!tspan_) {
    throw new TypeError('Invalid svg icon: ' + svg_path);
  }

  const version_string = tspan_.textContent || '';
  const has_change = !version_string.endsWith(ver_obj.version);

  if (has_change) {
    tspan_.textContent = 'Version ' + ver_obj.version;

    const ser_doc = new XMLSerializer().serializeToString(doc);
    await fs.writeFile(svg_path, ser_doc, 'utf-8');

    await render_svg({ input: [svg_path], output: [png_path] }, (err_) => {
      if (err_) {
        throw new Error(err_);
      }
    });
  }

  return has_change;
};

const process_mcpack_manifest_component = (
  ver_obj: semver.SemVer,
  uuid_set: Set<string>,
  manifest_component: PartialMcpackManifestComponent
) => {
  if (uuid_set.has(manifest_component.uuid)) {
    const mc_ver_obj = mcpack_version_to_semver(manifest_component.version);
    if (!mc_ver_obj) {
      throw new TypeError(
        'Invalid version in manifest: ' + String(manifest_component.version)
      );
    }

    if (ver_obj.compare(mc_ver_obj) != 0) {
      return {
        ...manifest_component,
        version: semver_to_mcpack_version(ver_obj),
      };
    }
  }

  return manifest_component;
};

const process_mcpack_manifest_component_list = (
  ver_obj: semver.SemVer,
  uuid_set: Set<string>,
  manifest_component_list: Array<PartialMcpackManifestComponent>
) => {
  const [list, has_change] = manifest_component_list.reduce(
    ([ls, b]: [Array<PartialMcpackManifestComponent>, boolean], component) => {
      const c = process_mcpack_manifest_component(ver_obj, uuid_set, component);
      ls.push(c);
      return [ls, b || c !== component];
    },
    [[], false]
  );

  return has_change ? list : manifest_component_list;
};

const process_mcpack_manifest_version = async (
  ver_obj: semver.SemVer,
  uuid_set: Set<string>,
  manifest_path: string
) => {
  const content = await fs.readFile(manifest_path, 'utf-8');
  const manifest_json = JSON.parse(content) as PartialMcpackManifestJson;

  const new_manifest = { ...manifest_json };

  new_manifest.header = process_mcpack_manifest_component(
    ver_obj,
    uuid_set,
    manifest_json.header
  );
  let has_change = new_manifest.header !== manifest_json.header;

  if (manifest_json.modules) {
    new_manifest.modules = process_mcpack_manifest_component_list(
      ver_obj,
      uuid_set,
      manifest_json.modules
    );

    has_change = has_change || new_manifest.modules !== manifest_json.modules;
  }

  if (manifest_json.dependencies) {
    new_manifest.dependencies = process_mcpack_manifest_component_list(
      ver_obj,
      uuid_set,
      manifest_json.dependencies
    );

    has_change =
      has_change || new_manifest.dependencies !== manifest_json.dependencies;
  }

  if (has_change) {
    await fs.writeFile(
      manifest_path,
      JSON.stringify(new_manifest, null, Settings.json_spaces),
      'utf-8'
    );
  }

  return has_change;
};

(async () => {
  const ver_obj = await package_version();

  await process_mcpack_manifest_version(
    ver_obj,
    mcpack_uuid_set,
    'assets/oomc_fun_bp/manifest.json'
  );

  await process_mcpack_icon(
    ver_obj,
    'assets/svg/oomc_fun_bp_pack_icon.svg',
    'assets/oomc_fun_bp/pack_icon.png'
  );

  await process_mcpack_manifest_version(
    ver_obj,
    mcpack_uuid_set,
    'assets/oomc_fun_rp/manifest.json'
  );

  await process_mcpack_icon(
    ver_obj,
    'assets/svg/oomc_fun_rp_pack_icon.svg',
    'assets/oomc_fun_rp/pack_icon.png'
  );

  await process_mcpack_manifest_version(
    ver_obj,
    mcpack_uuid_set,
    'assets/oomc_fun_sp/manifest.json'
  );
})();
