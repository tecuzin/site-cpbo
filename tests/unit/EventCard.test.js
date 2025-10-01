import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EventCard from '../../src/components/sections/EventCard.vue'

describe('EventCard', () => {
  const defaultProps = {
    title: 'Test Event',
    description: 'Test description',
    date: '2024-10-15'
  }

  it('renders with required props', () => {
    const wrapper = mount(EventCard, {
      props: defaultProps
    })
    
    expect(wrapper.find('.event-title').text()).toBe('Test Event')
    expect(wrapper.find('.event-description').text()).toBe('Test description')
  })

  it('displays date correctly', () => {
    const wrapper = mount(EventCard, {
      props: {
        ...defaultProps,
        date: '2024-10-15'
      }
    })
    
    expect(wrapper.find('.day').text()).toBe('15')
    expect(wrapper.find('.month').text()).toBe('OCT')
  })

  it('displays optional props when provided', () => {
    const wrapper = mount(EventCard, {
      props: {
        ...defaultProps,
        location: 'Test Location',
        time: '18:30',
        price: '15€'
      }
    })
    
    expect(wrapper.find('.event-location').text()).toContain('Test Location')
    expect(wrapper.find('.event-time').text()).toContain('18:30')
    expect(wrapper.find('.event-price').text()).toContain('15€')
  })

  it('displays tags when provided', () => {
    const wrapper = mount(EventCard, {
      props: {
        ...defaultProps,
        tags: ['Compétition', '5km']
      }
    })
    
    const tags = wrapper.findAll('.tag')
    expect(tags).toHaveLength(2)
    expect(tags[0].text()).toBe('Compétition')
    expect(tags[1].text()).toBe('5km')
  })

  it('does not display optional elements when not provided', () => {
    const wrapper = mount(EventCard, {
      props: defaultProps
    })
    
    expect(wrapper.find('.event-location').exists()).toBe(false)
    expect(wrapper.find('.event-time').exists()).toBe(false)
    expect(wrapper.find('.event-price').exists()).toBe(false)
    expect(wrapper.find('.event-tags').exists()).toBe(false)
  })

  it('handles empty tags array', () => {
    const wrapper = mount(EventCard, {
      props: {
        ...defaultProps,
        tags: []
      }
    })
    
    expect(wrapper.find('.event-tags').exists()).toBe(false)
  })

  it('applies correct CSS classes', () => {
    const wrapper = mount(EventCard, {
      props: defaultProps
    })
    
    expect(wrapper.find('.event-card').exists()).toBe(true)
    expect(wrapper.find('.event-date').exists()).toBe(true)
    expect(wrapper.find('.event-content').exists()).toBe(true)
  })
})
