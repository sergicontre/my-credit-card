import resolve from 'rollup-plugin-node-resolve';

export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
	input: 'src/index.js',
	output: {
		file: 'build/my-credit-card.js',
        format: 'es',
		sourcemap: true
	},
	plugins: [
        resolve()
    ]
};