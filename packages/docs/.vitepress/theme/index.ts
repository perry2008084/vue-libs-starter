import { h } from 'vue'
import Theme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import { ElementComponents } from '@multi-vue-lib/element-components'
import { VantComponents } from '@multi-vue-lib/vant-components'
import './styles/vars.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.use(Vant)
    app.use(ElementComponents)
    app.use(VantComponents)
  }
}
