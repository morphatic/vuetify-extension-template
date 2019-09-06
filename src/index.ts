import { VueConstructor } from 'vue'
import YourComponent from './YourComponent'

const YourPluginName = {
  install (Vue: VueConstructor, options?: any) {
    Vue.component('your-component', YourComponent)
  },
}

export { YourComponent }
export default YourPluginName

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(YourPluginName)
}
