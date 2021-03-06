import { Answers } from "./types";

export default (options: Answers) => {
  const base = {
    name: options.name,
    description: options.description,
    version: "1.0.0",
    main: "dist/index.js",
    types: "dist/index.d.ts",
    files: ["dist"],
    scripts: {
      prebuild: "rm -rf dist",
      build: "tsc -p tsconfig-build.json",
      prepare: "npm run build",
      release: "standard-version",
      test: "jest"
    },
    jest: {
      preset: "ts-jest",
      testEnvironment: "node"
    },
    husky: {
      hooks: {
        "pre-commit": "npm test && pretty-quick --staged",
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
      }
    },
    keywords: ["typescript"],
    license: "MIT",
    devDependencies: {
      "@commitlint/cli": "^7.2.1",
      "@commitlint/config-conventional": "^7.1.2",
      "@types/jest": "^23.3.9",
      husky: "^1.1.2",
      jest: "^23.6.0",
      prettier: "^1.13.7",
      "pretty-quick": "^1.8.0",
      "standard-version": "^4.4.0",
      "ts-jest": "^23.10.4",
      typescript: "^3.1.6"
    },
    dependencies: {}
  };
  if (options.type === "react") {
    base.devDependencies = {
      ...base.devDependencies,
      "@types/html-webpack-plugin": "^3.2.0",
      "@types/react": "^16.4.18",
      "@types/react-dom": "^16.0.9",
      "@types/webpack": "^4.4.17",
      "html-webpack-plugin": "^3.2.0",
      "html-webpack-include-assets-plugin": "^1.0.6",
      "react-dom": "^16.6.0",
      "ts-loader": "^5.3.0",
      "ts-node": "^7.0.1",
      "webpack-cli": "^3.1.2",
      "webpack-dev-server": "^3.1.10",
      react: "^16.6.0",
      webpack: "^4.25.1"
    } as any;
    base.scripts = {
      ...base.scripts,
      start: "webpack-dev-server --env.NODE_ENV=development",
      build: "webpack --env.NODE_ENV=production"
    } as any;
  }
  return base;
};
