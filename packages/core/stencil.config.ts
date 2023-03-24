import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil-community/postcss'
import autoprefixer from 'autoprefixer'
import { vueOutputTarget } from '@stencil/vue-output-target'

export const config: Config = {
  namespace: 'variety',
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
    },
    vueOutputTarget({
      componentCorePackage: '@view-design/variety',
      proxiesFile: '../variety-vue/lib/components.ts'
    })
  ]
}
