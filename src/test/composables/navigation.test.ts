import { describe, it, expect } from 'vitest'
import { navItems } from '../../lib/navigation'

describe('navigation', () => {
    it('has 5 nav items', () => {
        expect(navItems.length).toBe(5)
    })

    it('first item is Terkini with href /', () => {
        expect(navItems[0].label).toBe('Terkini')
        expect(navItems[0].href).toBe('/')
    })

    it('all items have label and href', () => {
        navItems.forEach(item => {
            expect(item.label).toBeTruthy()
            expect(item.href).toBeTruthy()
        })
    })

    it('contains expected routes', () => {
        const hrefs = navItems.map(item => item.href)
        
        expect(hrefs).toContain('/')
        expect(hrefs).toContain('/teknologi')
        expect(hrefs).toContain('/bisnis')
        expect(hrefs).toContain('/gaya-hidup')
        expect(hrefs).toContain('/opini')
    })
})