import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

module.exports = {
    input: './src/main.js',
    output: {
        file: './dist/bundle.min.js',
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
        uglify()
    ]
};