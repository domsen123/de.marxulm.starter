<template>
  <div class="uno-app-bar" :class="classList">
    <div class="uno-app-bar__inner">
      <div class="uno-app-bar__main" :style="{ backgroundColor: mainColor }">
        <div class="uno-app-bar__start">
          <slot name="start">
            <uno-button v-if="backButton" icon="i-carbon-arrow-left" class="ml-3" @click="navigateBack($router)" />
          </slot>
        </div>
        <div v-if="$slots.center" class="uno-app-bar__center">
          <slot name="center" />
        </div>
        <div v-if="$slots.end" class="uno-app-bar__end">
          <slot name="end" />
        </div>
      </div>
      <div v-if="$slots.extend" class="uno-app-bar__extend">
        <slot name="extend" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  fixed: { type: Boolean, default: false },
  allowCenterEvents: { type: Boolean, default: false },
  backButton: { type: Boolean, default: false },
  mainColor: { type: String },
})

const classList = computed(() => ({
  'uno-app-bar__allow-center-events': props.allowCenterEvents,
  'uno-app-bar__fixed': props.fixed,
}))
</script>

<style>
.uno-app-bar { @apply relative max-w-screen overflow-hidden min-h-12; }
.uno-app-bar > .uno-app-bar__inner { @apply w-full; height: inherit; }
.uno-app-bar.uno-app-bar__fixed > .uno-app-bar__inner > .uno-app-bar__main { @apply fixed bg-white; }

.uno-app-bar > .uno-app-bar__inner > .uno-app-bar__main { @apply relative flex w-full z-100 h-12; }

.uno-app-bar > .uno-app-bar__inner > .uno-app-bar__main > .uno-app-bar__start  { @apply flex z-102 self-center; }
.uno-app-bar > .uno-app-bar__inner > .uno-app-bar__main > .uno-app-bar__center { @apply absolute inset-0 flex z-101 items-center justify-center pointer-events-none; }
.uno-app-bar > .uno-app-bar__inner > .uno-app-bar__main > .uno-app-bar__end    { @apply ml-auto flex z-102 self-center gap-2; }

.uno-app-bar.uno-app-bar__allow-center-events > .uno-app-bar__inner > .uno-app-bar__main > .uno-app-bar__center { @apply pointer-events-auto; }
</style>
