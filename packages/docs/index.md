# Multi Vue Library

A comprehensive collection of Vue 3 component libraries, featuring both desktop and mobile components.

## Features

- 🖥️ **Element Components** - Desktop-focused components built on Element Plus
- 📱 **Vant Components** - Mobile-focused components built on Vant
- 🔧 **TypeScript Support** - Full TypeScript support with type definitions
- ⚡️ **Vite Powered** - Lightning fast development experience

## Quick Start

### Install Dependencies

```bash
# Using pnpm
pnpm add @multi-vue-lib/element-components
pnpm add @multi-vue-lib/vant-components

# Using npm
npm install @multi-vue-lib/element-components
npm install @multi-vue-lib/vant-components
```

### Usage

```vue
<script setup>
import { CustomButton } from '@multi-vue-lib/element-components'
import { MobileButton } from '@multi-vue-lib/vant-components'
</script>

<template>
  <CustomButton type="primary">Desktop Button</CustomButton>
  <MobileButton type="primary">Mobile Button</MobileButton>
</template>
```
