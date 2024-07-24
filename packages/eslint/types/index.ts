type FrameTypeMap = {
  vue: 2 | 3;
  react: undefined;
  pure: undefined;
};

export interface Frame<T extends keyof FrameTypeMap> {
  frameType: T;
  frameVersion: FrameTypeMap[T];
}

export interface BaseOptions {
  ignores: string[];
  scriptType: "javascript" | "typescript";
}

export interface Options extends Frame<keyof FrameTypeMap>, BaseOptions {}
