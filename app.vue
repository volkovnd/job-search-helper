<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate(title) {
    return title ? `${title} | job helper` : `job helper`
  }
})
</script>
