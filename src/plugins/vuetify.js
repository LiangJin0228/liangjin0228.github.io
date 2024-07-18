import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'custom',
    themes:{
      custom: {
        dark: true,
        colors: {
          primary: '#F48FB1',
        }
      }
    },
  },
})
