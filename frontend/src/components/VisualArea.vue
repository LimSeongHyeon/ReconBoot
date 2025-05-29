<script setup lang="ts">
defineProps<{
  title: string;
}>()
</script>

<template>
  <div class="h-full bg-main p-6">
    <div class="bg-card rounded-lg p-6 h-full">
      <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
      <div class="h-[calc(100%-2rem)]">
        <!-- 시각화 컴포넌트가 들어갈 자리 -->
      </div>
    </div>
  </div>
</template> 