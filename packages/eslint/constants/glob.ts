export const GLOB_IGNORE = [
  "*.sh",
  "*.md",
  "*.woff",
  "*.ttf",
  ".vscode",
  ".husky",
  ".github",

  "**/node_modules",
  "**/dist",

  "**/package-lock.json",
  "**/yarn.lock",
  "**/pnpm-lock.yaml",
  "**/bun.lockb",

  "**/CHANGELOG*.md",
  "**/LICENSE*",

  "**/auto-import?(s).d.ts",
  "**/components.d.ts",
];

export const GLOB_FILES_VUE = ["**/*.{js,mjs,cjs,ts,vue}"];
export const GLOB_FILES_TS = ["**/*.{js,mjs,cjs,ts}"];
export const GLOB_FILES_JS = ["**/*.{js,mjs,cjs}"];
