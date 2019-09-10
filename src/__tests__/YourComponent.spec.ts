import Vue from 'vue'
// Utils
import { mount, MountOptions, Wrapper } from '@vue/test-utils'
import { inspect } from 'util' // okay to delete this line if you don't use node inspect

// Mocks
const vuetifyMocks = {
  $vuetify : {
    theme: {
      currentTheme: {
        error: '#ff0000',
      },
      dark: false,
    },
    lang: {
      t: (val: string) => val,
    },
  },
}

// Component to be tested
import YourPluginName, { YourComponent } from '..'

// Data necessary for tests
const foo = 'bar'
const messages = []

describe('YourComponent', () => {
  describe('installer', () => {
    it('should register the your-component component', () => {
      Vue.use(YourPluginName)
      expect(Vue.options.components['your-component']).toBeTruthy()
    })
  })

  describe('component', () => {
    type Instance = InstanceType<typeof YourComponent>
    let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>
  
    beforeEach(() => {
      mountFunction = (options?: MountOptions<Instance>) => {
        return mount(YourComponent, {
          mocks: {
            ...vuetifyMocks,
          },
          ...options,
        })
      }
    })
  
    describe('initialization', () => {
      beforeEach(() => {
        // reset messages
        messages.length = 0
        // capture console messages to prevent them from cluttering the terminal
        const capture = m => { messages.push(m.toString()) }
        global.console.error = jest.fn(capture)
        global.console.warn = jest.fn(capture)
        global.console.log = jest.fn(capture)
      })
  
      it('should render component and match snapshot', () => {
        const wrapper = mountFunction({
          propsData: { foo },
        })
        // replace the auto-generated `id` with one that matches
        const html = wrapper.html().replace(/div id="input-\d+"/, 'div id="input-1"')
        expect(html).toMatchSnapshot()
      })
        
      it('should have a property called `foo`', () => {
        const wrapper = mountFunction({ propsData: { foo }, })
        expect(wrapper.vm.foo).toBeDefined()
        expect(wrapper.vm.foo).toBe('bar')
      })
    })
  
    describe('internal functions and events', () => {
      let wrapper
      beforeEach(() => {
        // capture console.warn
        const capture = m => { messages.push(m.toString()) }
        global.console.warn = jest.fn(capture)
        wrapper = mountFunction({
          propsData: { foo }
        })
      })
  
      it('bar() should return "baz"', () => {
        const result = wrapper.vm.bar()
        expect(result).toBe('baz')
      })  
    })
  })
})
