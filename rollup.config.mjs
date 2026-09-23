import resolve    from '@rollup/plugin-node-resolve';
import commonjs   from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps   from 'rollup-plugin-peer-deps-external';
import postcss    from 'rollup-plugin-postcss';
import url        from '@rollup/plugin-url';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
    { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
  ],
  plugins: [
    peerDeps(),                                                         // maneja dependencias externas
    url({ include: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'] }), // maneja archivos de imagen
    postcss({ modules: true, inject: true }),                           // habilita CSS Modules
    resolve(),                                                          // resuelve rutas de archivos
    commonjs(),                                                         // convierte CommonJS a ES6
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
    }),
  ],
};