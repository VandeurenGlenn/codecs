import typescript from '@rollup/plugin-typescript';
import tsconfig from './tsconfig.json' assert { type: 'json' }

export default [{
  input: ['src/index.ts', 'src/codecs.ts', 'src/utils.ts'],
  output: {
    dir: './exports',
    format: 'es'
  },
  plugins: [
    typescript(tsconfig)
  ]
}]