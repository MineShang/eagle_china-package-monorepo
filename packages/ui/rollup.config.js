import path from 'path';
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";
import packageJson from './package.json';

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      esbuild({ minify: true }),
      postcss({
        extract: false,
        modules: true,
        use: [
          [
            "sass",
            {
              data: '@import "./styles/index.scss";',
              includePaths: [path.join(__dirname, "src")],
            },
          ],
        ],
        extensions: [".scss"],
      }),
    ],
  },
  {
    input: "src/index.ts",
    plugins: [dts()],
    output: {
      file:  packageJson.types,
      format: "es",
    },
  },
];
