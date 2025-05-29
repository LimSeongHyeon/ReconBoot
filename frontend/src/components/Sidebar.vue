<script setup lang="ts">
import { ref } from 'vue'

interface SidebarItem {
  id: string;
  name: string;
}

const props = defineProps<{
  items: SidebarItem[];
}>()

const isCollapsed = ref(false)
</script>

<template>
  <div 
    :class="[
      'bg-[#121212] transition-all duration-300',
      isCollapsed ? 'w-16' : 'w-[260px] min-w-[240px] max-w-[300px]'
    ]"
  >
    <nav class="p-4">
      <div class="text-accent-alt mb-4 font-bold flex justify-between items-center">
        <span v-if="!isCollapsed">프로젝트</span>
        <button 
          @click="isCollapsed = !isCollapsed"
          class="text-gray-400 hover:text-white"
        >
          {{ isCollapsed ? '→' : '←' }}
        </button>
      </div>
      <div class="space-y-2">
        <button 
          v-for="item in items" 
          :key="item.id"
          class="w-full text-left px-4 py-2 rounded-lg hover:bg-card transition-colors text-sm"
        >
          {{ isCollapsed ? item.name.split(' ')[0] : item.name }}
        </button>
      </div>
    </nav>
  </div>
</template> 