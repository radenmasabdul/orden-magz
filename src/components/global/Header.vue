<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '../ui/navigation-menu'
import { Separator } from '../ui/separator'
import { navItems } from '../../lib/navigation'
import { useDate } from '../../composables/useDate'

const { today } = useDate()
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-[#faf8f4] border-b-[3px] border-double border-[#1a1714]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-2 pt-5 pb-3">
      
      <p class="text-[10px] sm:text-[11px] tracking-[2px] uppercase text-[#9a948f] text-center">
        {{ today }}
      </p>
      
      <h1 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-1px] leading-none text-[#1a1714] text-center">
        The Orden <span class="text-[#c8452a]">Magz</span>
      </h1>
      
      <div class="flex items-center gap-3 w-full justify-center">
        <Separator class="flex-1 max-w-20 sm:max-w-32 bg-[#ddd8d0]" />
        <span class="text-[10px] sm:text-[11px] tracking-[3px] uppercase text-[#9a948f] whitespace-nowrap px-2 text-center">
          All the stories worth reading
        </span>
        <Separator class="flex-1 max-w-20 sm:max-w-32 bg-[#ddd8d0]" />
      </div>
      
      <NavigationMenu>
        <NavigationMenuList class="flex flex-wrap justify-center gap-1">
          <NavigationMenuItem v-for="item in navItems" :key="item.label">
            <NavigationMenuLink as-child>
              <RouterLink
              :to="item.href"
              class="text-[10px] sm:text-[11.5px] tracking-[1px] uppercase text-[#4a4643] hover:text-[#c8452a] font-medium px-2 sm:px-3 py-2 transition-colors"
              >
                {{ item.label }}
              </RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

    </div>
  </header>
</template>