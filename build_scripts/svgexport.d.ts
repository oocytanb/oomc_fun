declare module 'svgexport' {
  export type RenderOptions = {
    src?: Array<string> | string;
    input?: Array<string> | string;
    dest?: Array<string> | string;
    output?: Array<string> | string;
  };

  export type RenderData =
    | string
    | RenderOptions
    | Array<RenderOptions>
    | {
        cwd?: string;
        base?: string;
      };

  export function render(
    data: RenderData,
    done?: (err?: string) => void
  ): Promise<void>;
}
