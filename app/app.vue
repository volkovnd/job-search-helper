<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate(title) {
    return (title ? title + ' | ' : '') + 'Job search helper'
  }
})
</script>
