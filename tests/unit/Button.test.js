import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../../src/components/ui/Button.vue'

describe('Button', () => {
  it('renders with default props', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click me' }
    })
    
    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.classes()).toContain('btn')
    expect(wrapper.classes()).toContain('btn-primary')
    expect(wrapper.classes()).toContain('btn-medium')
  })

  it('applies correct variant classes', () => {
    const variants = ['primary', 'secondary', 'outline']
    
    variants.forEach(variant => {
      const wrapper = mount(Button, {
        props: { variant },
        slots: { default: 'Button' }
      })
      
      expect(wrapper.classes()).toContain(`btn-${variant}`)
    })
  })

  it('applies correct size classes', () => {
    const sizes = ['small', 'medium', 'large']
    
    sizes.forEach(size => {
      const wrapper = mount(Button, {
        props: { size },
        slots: { default: 'Button' }
      })
      
      expect(wrapper.classes()).toContain(`btn-${size}`)
    })
  })

  it('applies disabled class when disabled', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Button' }
    })
    
    expect(wrapper.classes()).toContain('btn-disabled')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'Button' }
    })
    
    await wrapper.trigger('click')
    
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Button' }
    })
    
    await wrapper.trigger('click')
    
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Custom Button Text' }
    })
    
    expect(wrapper.text()).toBe('Custom Button Text')
  })
})
