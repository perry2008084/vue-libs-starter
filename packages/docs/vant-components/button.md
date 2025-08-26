# Mobile Button Component

The Mobile Button component is a customized version of Vant's button with mobile-specific features.

## Basic Usage

```vue
<template>
  <MobileButton>Default Button</MobileButton>
  <MobileButton type="primary">Primary Button</MobileButton>
  <MobileButton type="success">Success Button</MobileButton>
  <MobileButton type="warning">Warning Button</MobileButton>
  <MobileButton type="danger">Danger Button</MobileButton>
</template>

<script setup>
import { MobileButton } from '@multi-vue-lib/vant-components'
</script>
```

## API

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| type | 'primary' \| 'success' \| 'warning' \| 'danger' | - | Button type |
| size | 'large' \| 'normal' \| 'small' \| 'mini' | 'normal' | Button size |
| disabled | boolean | false | Whether the button is disabled |

### Events

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
| click | (event: MouseEvent) | Triggered when button is clicked |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Button content |
