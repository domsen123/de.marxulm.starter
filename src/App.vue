<template>
  <uno-app>
    <router-view v-slot="{ Component, route }">
      <!-- <Transition> -->
      <Transition :name="route.meta.isBack ? 'c-slide-right' : 'c-slide-left'">
        <component :is="Component" :meta="JSON.stringify(route.meta)" />
      </Transition>
    </router-view>
  </uno-app>
</template>

<script lang="ts" setup>
</script>
