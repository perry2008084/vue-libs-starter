# Multi Vue Library Starter

A monorepo starter template for building multiple Vue 3 component libraries with different UI frameworks (Element Plus and Vant).

## Features

- 📦 PNPM Workspace
- ⚡️ Vue 3 with TypeScript
- 🎨 Two UI Component Libraries
  - Element Plus based components for desktop
  - Vant based components for mobile
- 🔧 TypeScript for type safety
- 📚 Changeset for version management
- 🎯 ESLint + Prettier for code quality
- 📦 Vite for fast development and building

## Project Structure

```
multi-vue-lib-starter/
├── packages/
│   ├── element-components/    # Element Plus based components
│   └── vant-components/      # Vant based components
├── examples/                 # Demo applications
│   ├── element-demo/
│   └── vant-demo/
├── .changeset/              # Changeset configuration
└── package.json            # Root package.json
```

## Getting Started

### Prerequisites

- Node.js (>=16)
- PNPM (>=8)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server for all packages
pnpm dev

# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Format code
pnpm format
```

## Component Libraries

### Element Components (@multi-vue-lib/element-components)

Desktop-focused components built on top of Element Plus.

```typescript
import { CustomButton } from '@multi-vue-lib/element-components'
```

### Vant Components (@multi-vue-lib/vant-components)

Mobile-focused components built on top of Vant.

```typescript
import { MobileButton } from '@multi-vue-lib/vant-components'
```

## Version Management

This project uses [changesets](https://github.com/changesets/changesets) for version management.

```bash
# Create a new changeset
pnpm changeset

# Update versions
pnpm version

# Publish packages
pnpm publish
```

## Adding New Components

1. Create a new directory in the appropriate package:
   ```
   packages/[package]/src/components/[ComponentName]/
   ```

2. Create the following files:
   - `types.ts` - Type definitions
   - `[ComponentName].vue` - Component implementation
   - `index.ts` - Component exports

3. Export the component in `src/components/index.ts`

4. Create a changeset for the new component:
   ```bash
   pnpm changeset
   ```

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
