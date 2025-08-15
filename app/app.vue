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

const $q = useQuasar()

const additionalIcons: Record<string, string> = {
  hh: 'svguse:sprite.svg#hh',
  habr: 'svguse:sprite.svg#habr'
}

$q.iconMapFn = (iconName) => {
  const icon = additionalIcons[iconName]

  if (icon) {
    return {
      icon
    }
  }
}
</script>
