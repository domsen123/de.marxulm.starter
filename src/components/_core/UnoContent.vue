<template>
  <div class="uno-content">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.uno-content { @apply relative flex flex-col flex-1 max-w-screen overflow-y-auto; }
</style>
