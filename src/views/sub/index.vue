<template>
  <uno-page>
    <uno-app-bar back-button>
      <template #center>
        Sub
      </template>
    </uno-app-bar>
    <uno-content class="bg-purple-300">
      <div v-for="i in 200" :key="i" class="mb-2">
        {{ i }}
      </div>
    </uno-content>
  </uno-page>
</template>

<script lang="ts" setup>
</script>
