import babel from 'babel'

export function translate (load) {
	let output = babel.transform(load.source, {whitelist: ['react', 'es6.arrowFunctions'], sourceMap: true});
	load.source = output.code;
	load.metadata.sourceMap = output.map;
}
