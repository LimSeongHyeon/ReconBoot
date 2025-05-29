<script setup lang="ts">
import { ref, computed } from 'vue'
import Sidebar from './components/Sidebar.vue'
import TabBar from './components/TabBar.vue'
import VisualArea from './components/VisualArea.vue'
import CommandOutput from './components/CommandOutput.vue'
import Footer from './components/Footer.vue'
import Banner from './components/Banner.vue'

interface Tab {
  id: string;
  name: string;
}

const tabs = ref<Tab[]>([
  { id: 'nmap', name: 'Nmap' },
  { id: 'whatweb', name: 'WhatWeb' },
  { id: 'nikto', name: 'Nikto' },
])

const sidebarItems = [
  { id: 'projects', name: '📁 프로젝트 목록' },
  { id: 'tools', name: '🔍 탐지 도구' },
  { id: 'settings', name: '⚙️ 설정' },
]

const activeTab = ref('nmap')
const currentCommand = ref('nmap -sV -sC scanme.nmap.org')
const commandOutput = ref('Starting Nmap 7.92 ( https://nmap.org )\n...')

const activeTabContent = computed(() => {
  return {
    title: tabs.value.find((tab: Tab) => tab.id === activeTab.value)?.name || ''
  }
})

const addTab = () => {
  const newId = `tab-${Date.now()}`
  tabs.value.push({ id: newId, name: 'new tab' })
  activeTab.value = newId
}

const removeTab = (tabId: string) => {
  if (tabs.value.length > 1) {
    tabs.value = tabs.value.filter((tab: Tab) => tab.id !== tabId)
    if (activeTab.value === tabId) {
      activeTab.value = tabs.value[0].id
    }
  }
}

const updateTabName = (tabId: string, newName: string) => {
  const tab = tabs.value.find((t: Tab) => t.id === tabId)
  if (tab) {
    tab.name = newName
  }
}
</script>

<template>
  <div class="h-screen w-screen bg-background text-text-primary flex flex-col overflow-hidden">
    <Banner />
    <div class="flex-1 flex flex-col overflow-hidden">
      <TabBar
        :tabs="tabs"
        :active-tab="activeTab"
        @update:active-tab="activeTab = $event"
        @add-tab="addTab"
        @remove-tab="removeTab"
        @update-tab-name="updateTabName"
      />
      <div class="flex-1 flex overflow-hidden">
        <div class="flex-none">
          <Sidebar :items="sidebarItems" />
        </div>
        <div class="flex-1 min-w-0">
          <VisualArea :title="activeTabContent.title" />
        </div>
      </div>
      <CommandOutput
        :command="currentCommand"
        :output="commandOutput"
      />
      <Footer />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

body {
  font-family: 'Inter', sans-serif;
}

/* 스크롤바 스타일링 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #444;
}
</style>
