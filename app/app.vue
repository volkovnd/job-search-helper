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
  },
  htmlAttrs: {
    lang: 'ru',
    translate: 'no'
  },
  meta: [
    {
      name: 'google',
      content: 'notranslate'
    }
  ],
  link: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: `${import.meta.env.NUXT_APP_BASE_URL || '/'}favicon.ico`
    }
  ]
})
</script>
