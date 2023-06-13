<template>
  <uno-page>
    <uno-app-bar>
      <template #center>
        Home
      </template>
      <template #end>
        <uno-button class="mr-3" @click="navigate($router, '/sub')">
          To Sub
        </uno-button>
      </template>
    </uno-app-bar>
    <uno-content class="bg-red-200">
      <div v-for="i in 200" :key="i" class="mb-2">
        {{ i }}
      </div>
    </uno-content>
  </uno-page>
</template>

<script lang="ts" setup>
import { navigate } from '~/utils'
</script>
