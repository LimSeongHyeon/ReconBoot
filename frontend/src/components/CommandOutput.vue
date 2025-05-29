<script setup lang="ts">
defineProps<{
  command: string;
  output: string;
}>()
</script>

<template>
  <div class="bg-[#1e1e2f] border-t border-gray-700">
    <div class="h-[180px] min-h-[140px] overflow-y-auto">
      <div class="p-4 font-mono text-[0.8rem] text-[#d0d0d0] whitespace-pre-wrap">
        <div class="text-[#c5c8c6]">$ {{ command }}</div>
        <div class="mt-2">{{ output }}</div>
      </div>
    </div>
  </div>
</template> 