import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';

module.exports = {
    input: './src/main.js',
    output: {
        file: './dev/bundle.js',
        format: 'cjs',
        name: 'bundle',
        globals: {
            'lodash': '_',
        }
    },
    plugins: [
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        resolve(),
        commonjs(),
        serve('dev')
    ]
};