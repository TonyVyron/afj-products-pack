import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // simula el DOM para tests de componentes
    globals:     true,    // describe/test/expect sin imports explícitos
  },
});