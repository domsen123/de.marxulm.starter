<template>
  <component :is="isComponent" class="uno-button" :class="classList" :to="to" type="button">
    <slot>
      <div v-if="icon" :class="icon" />
    </slot>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: { type: String },
  icon: { type: String, default: '' },
  primary: { type: Boolean, default: false },
})

const isComponent = computed(() => {
  if (props.to) return RouterLink
  return 'button'
})

const classList = computed(() => ({
  'uno-button__icon': props.icon,
  'uno-button__primary': props.primary,
}))
</script>

<style>
.uno-button { -webkit-tap-highlight-color: transparent; }
button.uno-button, a.uno-button { @apply bg-transparent inline-flex items-center justify-center gap-2 px-3 py-1 active:text-slate-800/70; }
button.uno-button.uno-button__primary, a.uno-button.uno-button__primary { @apply bg-primary text-white active:bg-primary/70; }
</style>
