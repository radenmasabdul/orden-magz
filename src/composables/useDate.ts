import { computed } from 'vue'

export function useDate() {
    const today = computed(() =>
        new Date().toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
    )
    
    return { today }
}