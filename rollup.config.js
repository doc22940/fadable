import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/fadable.js',
    output: [
        {
            exports: 'default',
            file: 'dist/fadable.min.js',
            format: 'cjs',
            plugins: [terser()]
        },
        {
            exports: 'default',
            file: 'demo/fadable.min.js',
            format: 'iife',
            name: 'fadable',
            plugins: [terser()]
        }
    ]
};
