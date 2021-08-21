import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('../package.json');

const external = [...Object.keys(packageJson.devDependencies || {})];
export default [
  {
    input: `./dist/src/index.js`,
    external: external,
    output: {
      file: `./dist/src/index.cjs.js`,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      externalLiveBindings: false,
    },
    plugins: [
      resolve(),
    ],
  },
  {
    input: './dist/src/index.js',
    external: external,
    output: [
      {
        name: packageJson.name,
        file: `./dist/src/bundle.js`,
        format: 'umd',
        sourcemap: true,
        exports: 'named',
        externalLiveBindings: false,
      },
      {
        name: packageJson.name,
        file: `./dist/src/bundle.min.js`,
        format: 'umd',
        sourcemap: true,
        exports: 'named',
        externalLiveBindings: false,
        plugins: [
          terser(),
        ],
      },
    ],
    plugins: [
      resolve(),
    ],
  },
];
