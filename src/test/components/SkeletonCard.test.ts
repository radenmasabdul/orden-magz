import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SkeletonCard from '../../features/articles/components/SkeletonCard.vue'

describe('SkeletonCard', () => {
    it('renders without errors', () => {
        const wrapper = mount(SkeletonCard)
        expect(wrapper.exists()).toBe(true)
    })

    it('renders correct number of skeleton elements', () => {
        const wrapper = mount(SkeletonCard)
        const skeletons = wrapper.findAll('.animate-pulse, [data-slot="skeleton"]')
        expect(skeletons.length).toBeGreaterThan(0)
    })

    it('has image skeleton with correct height class', () => {
        const wrapper = mount(SkeletonCard)
        const imageSkeleton = wrapper.find('.h-48')
        expect(imageSkeleton.exists()).toBe(true)
    })

    it('has footer skeleton elements', () => {
        const wrapper = mount(SkeletonCard)
        const footerSkeletons = wrapper.find('.ml-auto')
        expect(footerSkeletons.exists()).toBe(true)
    })
})