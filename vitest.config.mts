import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    include: ['lib/**.spec.ts'],
    pool: "threads",
    watch: false,
    environment: 'node',
    reporters: ['default'],
  },
})
