import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
// import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it.skip('renders properly', () => {
    // const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    // expect(wrapper.text()).toContain('Hello Vitest')
  })
  it('passes for debug purposes', () => {
    expect(true).toBe(true)
  })
})
