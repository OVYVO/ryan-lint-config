export interface BaseOptions {
  ignore: string[];
}

export type Options = Partial<BaseOptions> & {
  version: "vue2" | "vue3";
  type: "javascript" | "typescript";
};
