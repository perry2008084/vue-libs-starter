<template>
  <van-button
    :type="type"
    :size="size"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </van-button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { ButtonProps } from './types'

export default defineComponent({
  name: 'MobileButton',
  props: {
    type: {
      type: String as PropType<ButtonProps['type']>,
      default: 'default'
    },
    size: {
      type: String as PropType<ButtonProps['size']>,
      default: 'normal'
    },
    disabled: {
      type: Boolean as PropType<ButtonProps['disabled']>,
      default: false
    }
  },
  emits: ['click']
})
</script>
