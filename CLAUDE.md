# HF-50 Development Guidelines

## Build & Test Commands
- Root: `pnpm run build` | `pnpm run dev` | `pnpm run lint` | `pnpm run format`
- API: `cd apps/api && pnpm run dev` | `pnpm run test` | `pnpm run test:watch`
- Web: `cd apps/web && pnpm run dev` | `pnpm run build`
- Single test: `cd apps/api && pnpm run test -- path/to/test.spec.ts`
- Type checking: `pnpm run check-types`

## Code Style
- TypeScript: Strong typing with explicit return types and interfaces
- Naming: PascalCase (Components, Classes), camelCase (variables, functions)
- Imports: External libraries first, followed by internal modules
- Formatting: 2-space indentation, trailing commas, single quotes in web components
- Error handling: Use try/catch blocks and explicit error types
- UI components: Use React.forwardRef, component props interfaces in same file

## Stack
- Backend: NestJS with Prisma ORM
- Frontend: Next.js 15 with Tailwind CSS
- Authentication: Clerk