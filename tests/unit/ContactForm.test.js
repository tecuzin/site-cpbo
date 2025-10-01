import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '../../src/components/ui/ContactForm.vue'

describe('ContactForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ContactForm)
  })

  it('renders all form fields', () => {
    expect(wrapper.find('#name').exists()).toBe(true)
    expect(wrapper.find('#email').exists()).toBe(true)
    expect(wrapper.find('#phone').exists()).toBe(true)
    expect(wrapper.find('#subject').exists()).toBe(true)
    expect(wrapper.find('#message').exists()).toBe(true)
  })

  it('validates required fields', async () => {
    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')

    expect(wrapper.find('.error-message').exists()).toBe(true)
    expect(wrapper.find('.error').exists()).toBe(true)
  })

  it('validates email format', async () => {
    await wrapper.find('#email').setValue('invalid-email')
    await wrapper.find('button[type="submit"]').trigger('click')

    expect(wrapper.find('.error-message').text()).toContain('email n\'est pas valide')
  })

  it('validates phone format', async () => {
    await wrapper.find('#phone').setValue('invalid-phone')
    await wrapper.find('button[type="submit"]').trigger('click')

    expect(wrapper.find('.error-message').text()).toContain('téléphone n\'est pas valide')
  })

  it('calls onSubmit prop when provided', async () => {
    const mockSubmit = vi.fn().mockResolvedValue({ success: true })
    wrapper = mount(ContactForm, {
      props: { onSubmit: mockSubmit }
    })

    // Fill form with valid data
    await wrapper.find('#name').setValue('John Doe')
    await wrapper.find('#email').setValue('john@example.com')
    await wrapper.find('#subject').setValue('inscription')
    await wrapper.find('#message').setValue('Test message')

    await wrapper.find('button[type="submit"]').trigger('click')

    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '',
      subject: 'inscription',
      message: 'Test message'
    })
  })

  it('shows success message after successful submission', async () => {
    const mockSubmit = vi.fn().mockResolvedValue({ success: true })
    wrapper = mount(ContactForm, {
      props: { onSubmit: mockSubmit }
    })

    // Fill form with valid data
    await wrapper.find('#name').setValue('John Doe')
    await wrapper.find('#email').setValue('john@example.com')
    await wrapper.find('#subject').setValue('inscription')
    await wrapper.find('#message').setValue('Test message')

    await wrapper.find('button[type="submit"]').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.submit-message.success').exists()).toBe(true)
    expect(wrapper.find('.submit-message.success').text()).toContain('envoyé avec succès')
  })

  it('shows error message after failed submission', async () => {
    const mockSubmit = vi.fn().mockRejectedValue(new Error('Network error'))
    wrapper = mount(ContactForm, {
      props: { onSubmit: mockSubmit }
    })

    // Fill form with valid data
    await wrapper.find('#name').setValue('John Doe')
    await wrapper.find('#email').setValue('john@example.com')
    await wrapper.find('#subject').setValue('inscription')
    await wrapper.find('#message').setValue('Test message')

    await wrapper.find('button[type="submit"]').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.submit-message.error').exists()).toBe(true)
    expect(wrapper.find('.submit-message.error').text()).toContain('erreur')
  })

  it('emits cancel event when cancel button is clicked', async () => {
    await wrapper.find('button[type="button"]').trigger('click')
    expect(wrapper.emitted('cancel')).toBeTruthy()
  })

  it('disables submit button while submitting', async () => {
    const mockSubmit = vi.fn().mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)))
    wrapper = mount(ContactForm, {
      props: { onSubmit: mockSubmit }
    })

    // Fill form with valid data
    await wrapper.find('#name').setValue('John Doe')
    await wrapper.find('#email').setValue('john@example.com')
    await wrapper.find('#subject').setValue('inscription')
    await wrapper.find('#message').setValue('Test message')

    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')

    expect(submitButton.attributes('disabled')).toBeDefined()
    expect(submitButton.text()).toContain('Envoi en cours')
  })
})
