import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useDate } from '../../composables/useDate'

describe('useDate', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('generate the correct indonesian date format', () => {
        const mockDate = new Date('2024-01-15T00:00:00Z')
        vi.setSystemTime(mockDate)

        const { today } = useDate()

        expect(today.value).toBe('Senin, 15 Januari 2024')
    })
})