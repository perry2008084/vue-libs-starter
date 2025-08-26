# Getting Started

This guide will help you get started with our Vue 3 component libraries.

## Installation

First, install the required packages:

```bash
# For desktop components
pnpm add @multi-vue-lib/element-components

# For mobile components
pnpm add @multi-vue-lib/vant-components
```

## Setup

### Element Components

```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ElementComponents } from '@multi-vue-lib/element-components'

const app = createApp(App)
app.use(ElementPlus)
app.use(ElementComponents)
app.mount('#app')
```

### Vant Components

```ts
// main.ts
import { createApp } from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import { VantComponents } from '@multi-vue-lib/vant-components'

const app = createApp(App)
app.use(Vant)
app.use(VantComponents)
app.mount('#app')
```
