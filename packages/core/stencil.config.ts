import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil-community/postcss'
import autoprefixer from 'autoprefixer'

export const config: Config = {
  namespace: 'core',
  plugins: [
    sass({
      // injectGlobalPaths: [
      //   'src/globals/variables.scss',
      //   'src/globals/mixins.scss'
      // ]
    }),
    postcss({
      plugins: [autoprefixer()]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json'
    }
  ]
}
