import { defineConfig } from 'vitest/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const viteTestConfig = require('test-config/vite');

export default defineConfig({
  test: {
    ...viteTestConfig,
  },
});
