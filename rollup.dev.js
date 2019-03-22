import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { relative } from 'path';
import { name } from './package.json';

export default {
	input: 'src/index.ts',
	plugins: [
		typescript({
			tsconfig: 'tsconfig.json',
			useTsconfigDeclarationDir: true
		}),
		replace({
			DEBUG: JSON.stringify(true)
		}),
		babel({
			exclude: 'node_modules/**',
			extensions: ['.js', '.ts']
		})
	],
	treeshake: {
		propertyReadSideEffects: false
	},
	output:
	{
		name,
		file: 'example/scripts/{{bundleName}}.umd.js',
		format: 'umd',
		sourcemap: true,
		sourcemapPathTransform: path => ~path.indexOf('index') ? '{{bundleName}}.js' : relative('src', path)
	}
};
