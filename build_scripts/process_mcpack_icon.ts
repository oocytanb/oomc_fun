// npm install -D svgexport xmldom @types/xmldom

import { promises as fs } from 'fs';
import * as semver from 'semver';
import { DOMParser, XMLSerializer } from 'xmldom';

import { render as render_svg } from 'svgexport';

export const process_mcpack_icon = async (
  ver_obj: semver.SemVer,
  svg_path: string,
  png_path: string
): Promise<boolean> => {
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
