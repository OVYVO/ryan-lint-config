// { files: ["**/*.{js,mjs,cjs,ts,vue}"] },

export interface BaseOptions {
  ignore: string[];
  files: string[];
}

export type Options = Partial<BaseOptions> & {
  vueVersion: 2 | 3;
  scriptType: "javascript" | "typescript";
};
