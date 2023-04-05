import { defineConfig } from 'iles'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  modules: [
    [
      '@pinegrow/iles-module',
      {
        liveDesigner: {
          devtoolsKey: 'devtools',
          tailwindcss: {
            configPath: 'tailwind.config.cjs',
            cssPath: '@/assets/css/tailwind.css',
            restartOnConfigUpdate: true,
            restartOnThemeUpdate: false,
          },
        },
      },
    ],
  ],

  vue: {
    reactivityTransform: false,
  },

  vite: {
    plugins: [
      Unocss({
        presets: [
          presetIcons({
            prefix: '', // overrides default prefix 'i'
          }),
        ],
      }),
    ],
  },

  siteUrl: 'https://pg-iles-tailwindcss.netlify.app',
  extendRoutes(routes) {
    const toTitleCase = (phrase) => {
      return phrase
        .toLowerCase()
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    let navOrder = 2

    routes.forEach((route) => {
      route.meta = {
        title: route.path === '/' ? 'Home' : toTitleCase(route.name),
      }
      if (route.path === '/') {
        route.meta.navOrder = 1
      } else {
        route.meta.navOrder = navOrder++
      }
    })
  },
})
