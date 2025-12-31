import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  // For user/organization Pages (repo named <username>.github.io), base must be '/'
  // If you later use a project repo, change this to '/<repo-name>/'
  base: '/',
});
