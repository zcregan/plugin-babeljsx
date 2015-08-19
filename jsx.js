import babel from 'babel'

export function translate (load) {
	let output = babel.transform(load.source, {whitelist: ['react'], sourceMap: true});
	load.source = output.code;
	load.metadata.sourceMap = output.map;
}
