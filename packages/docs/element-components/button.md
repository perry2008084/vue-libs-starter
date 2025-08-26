# Button Component

The Button component is a customized version of Element Plus's button with additional features.

## Basic Usage

```vue
<template>
  <CustomButton>Default Button</CustomButton>
  <CustomButton type="primary">Primary Button</CustomButton>
  <CustomButton type="success">Success Button</CustomButton>
  <CustomButton type="warning">Warning Button</CustomButton>
  <CustomButton type="danger">Danger Button</CustomButton>
</template>

<script setup>
import { CustomButton } from '@multi-vue-lib/element-components'
</script>
```

## API

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| type | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | - | Button type |
| size | 'large' \| 'default' \| 'small' | 'default' | Button size |
| disabled | boolean | false | Whether the button is disabled |

### Events

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
| click | (event: MouseEvent) | Triggered when button is clicked |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Button content |
