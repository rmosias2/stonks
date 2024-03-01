import { defineConfig } from 'vitest/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const viteTestConfig = require('@tooling/test-config');

export default defineConfig({
  test: {
    ...viteTestConfig,
  },
});
