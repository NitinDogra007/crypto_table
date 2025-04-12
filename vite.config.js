import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		'process.env.API_KEY': JSON.stringify(process.env.VITE_API_KEY),
	},
});
