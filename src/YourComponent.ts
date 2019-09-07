// Imported Types
/// <reference path="../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue'
// import { VuetifyThemeVariant } from 'vuetify/types/services/theme'
// import { ElementStyles } from '../types'

// 3rd Party Libs
// import merge from 'deepmerge' // EXAMPLE; You can remove this if you have no 3rd party libs

// Styles
import './YourComponent.sass'

/**
 * !IMPORTANT: Import the Vuetify components you plan to extend here.
 *             VTextField is left here as an example. You should remove
 *             or replace it with the component you want to extend.
 */
// @ts-ignore
import { VTextField } from 'vuetify/lib'

// Create Base Mixins and Define Custom Properties
const base = Vue.extend({ mixins: [VTextField] })
interface options extends InstanceType<typeof base> {
  /**
   * !Props unique to YourComponent
   * Add properties of your project that TypeScript should know
   * about here.
   */
  foo: string

  /**
   * !Props that **should** have been inherited from VTextField
   * If TypeScript complains about a property not being defined,
   * even though it is clearly defined on the component you're
   * extending, you can list it here and the error will go away.
   *
   * You can remove the ones below if you're not extending VTextField
   * or you don't use them in your component.
   */
  autofocus: boolean
  color: string|null
  computedId: string
  disabled: boolean
  errorBucket: string[]
  iconStyle: 'default'|'solid'
  isDark: boolean
  isFocused: boolean
  labelWidth: number|string
  lazyValue: any
  loaderHeight: number|string
  loading: string|boolean
  outlined: boolean
  $vuetify: any // VuetifyObject // importing this type from Vuetify causes errors for some reason
}

// Extend VTextField to define the YourComponent component
export default base.extend<options>().extend({
  name: 'your-component',
  props: {
    foo: {
      type: String,
      default: 'bar',
    },
  },
  data: () => ({
  }),
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    bar () {
      return 'baz'
    },
  },
})
