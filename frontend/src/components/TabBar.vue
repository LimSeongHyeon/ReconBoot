<script setup lang="ts">
import { ref } from 'vue'

interface Tab {
  id: string;
  name: string;
}

const props = defineProps<{
  tabs: Tab[];
  activeTab: string;
}>()

const emit = defineEmits<{
  (e: 'update:activeTab', id: string): void;
  (e: 'addTab'): void;
  (e: 'removeTab', id: string): void;
  (e: 'updateTabName', id: string, newName: string): void;
}>()

const editingTabId = ref<string | null>(null)
const editingTabName = ref('')

const startEditing = (tab: Tab) => {
  editingTabId.value = tab.id
  editingTabName.value = tab.name
}

const finishEditing = () => {
  if (editingTabId.value && editingTabName.value.trim()) {
    emit('updateTabName', editingTabId.value, editingTabName.value.trim())
  }
  editingTabId.value = null
  editingTabName.value = ''
}
</script>

<template>
  <div class="bg-card p-2 border-b border-gray-700">
    <div class="flex items-center space-x-1 overflow-x-auto">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        :class="[
          'h-8 px-2 rounded-lg transition-colors flex items-center space-x-1 text-sm',
          activeTab === tab.id 
            ? 'bg-gray-800 text-blue-400 font-semibold' 
            : 'bg-gray-700 text-gray-300'
        ]"
        @click="emit('update:activeTab', tab.id)"
      >
        <template v-if="editingTabId === tab.id">
          <input
            v-model="editingTabName"
            @blur="finishEditing"
            @keyup.enter="finishEditing"
            @keyup.esc="editingTabId = null"
            class="bg-transparent border-none focus:outline-none text-sm w-20"
            ref="nameInput"
          />
        </template>
        <template v-else>
          <span @dblclick="startEditing(tab)">{{ tab.name }}</span>
          <button 
            v-if="tabs.length > 1"
            @click.stop="emit('removeTab', tab.id)"
            class="hover:text-red-500 transition-colors ml-1"
          >
            ×
          </button>
        </template>
      </button>
      <button 
        @click="emit('addTab')"
        class="h-8 px-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 text-sm"
      >
        +
      </button>
    </div>
  </div>
</template> 