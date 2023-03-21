module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156332, function(require, module, exports) {


const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const camelcase = require('camelcase');
const findUp = require('find-up');
const resolveFrom = require('resolve-from');
const getPackageType = require('get-package-type');

const readFile = promisify(fs.readFile);

let loadActive = false;

function isLoading() {
	return loadActive;
}

const standardConfigFiles = [
	'.nycrc',
	'.nycrc.json',
	'.nycrc.yml',
	'.nycrc.yaml',
	'nyc.config.js',
	'nyc.config.cjs',
	'nyc.config.mjs'
];

function camelcasedConfig(config) {
	const results = {};
	for (const [field, value] of Object.entries(config)) {
		results[camelcase(field)] = value;
	}

	return results;
}

async function findPackage(options) {
	const cwd = options.cwd || process.env.NYC_CWD || process.cwd();
	const pkgPath = await findUp('package.json', {cwd});
	if (pkgPath) {
		const pkgConfig = JSON.parse(await readFile(pkgPath, 'utf8')).nyc || {};
		if ('cwd' in pkgConfig) {
			pkgConfig.cwd = path.resolve(path.dirname(pkgPath), pkgConfig.cwd);
		}

		return {
			cwd: path.dirname(pkgPath),
			pkgConfig
		};
	}

	return {
		cwd,
		pkgConfig: {}
	};
}

async function actualLoad(configFile) {
	if (!configFile) {
		return {};
	}

	const configExt = path.extname(configFile).toLowerCase();
	switch (configExt) {
		case '.js':
			/* istanbul ignore next: coverage for 13.2.0+ is shown in load-esm.js */
			if (await getPackageType(configFile) === 'module') {
				return require('./load-esm')(configFile);
			}

			/* fallthrough */
		case '.cjs':
			return require(configFile);
		/* istanbul ignore next: coverage for 13.2.0+ is shown in load-esm.js */
		case '.mjs':
			return require('./load-esm')(configFile);
		case '.yml':
		case '.yaml':
			return require('js-yaml').load(await readFile(configFile, 'utf8'));
		default:
			return JSON.parse(await readFile(configFile, 'utf8'));
	}
}

async function loadFile(configFile) {
	/* This lets @istanbuljs/esm-loader-hook avoid circular initialization when loading
	 * configuration.  This should generally only happen when the loader hook is active
	 * on the main nyc process. */
	loadActive = true;

	try {
		return await actualLoad(configFile);
	} finally {
		loadActive = false;
	}
}

async function applyExtends(config, filename, loopCheck = new Set()) {
	config = camelcasedConfig(config);
	if ('extends' in config) {
		const extConfigs = [].concat(config.extends);
		if (extConfigs.some(e => typeof e !== 'string')) {
			throw new TypeError(`${filename} contains an invalid 'extends' option`);
		}

		delete config.extends;
		const filePath = path.dirname(filename);
		for (const extConfig of extConfigs) {
			const configFile = resolveFrom.silent(filePath, extConfig) ||
				resolveFrom.silent(filePath, './' + extConfig);
			if (!configFile) {
				throw new Error(`Could not resolve configuration file ${extConfig} from ${path.dirname(filename)}.`);
			}

			if (loopCheck.has(configFile)) {
				throw new Error(`Circular extended configurations: '${configFile}'.`);
			}

			loopCheck.add(configFile);

			// eslint-disable-next-line no-await-in-loop
			const configLoaded = await loadFile(configFile);
			if ('cwd' in configLoaded) {
				configLoaded.cwd = path.resolve(path.dirname(configFile), configLoaded.cwd);
			}

			Object.assign(
				config,
				// eslint-disable-next-line no-await-in-loop
				await applyExtends(configLoaded, configFile, loopCheck)
			);
		}
	}

	return config;
}

async function loadNycConfig(options = {}) {
	const {cwd, pkgConfig} = await findPackage(options);
	const configFiles = [].concat(options.nycrcPath || standardConfigFiles);
	const configFile = await findUp(configFiles, {cwd});
	if (options.nycrcPath && !configFile) {
		throw new Error(`Requested configuration file ${options.nycrcPath} not found`);
	}

	const config = {
		cwd,
		...(await applyExtends(pkgConfig, path.join(cwd, 'package.json'))),
		...(await applyExtends(await loadFile(configFile), configFile))
	};

	const arrayFields = ['require', 'extension', 'exclude', 'include'];
	for (const arrayField of arrayFields) {
		if (config[arrayField]) {
			config[arrayField] = [].concat(config[arrayField]);
		}
	}

	return config;
}

module.exports = {
	loadNycConfig,
	isLoading
};

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156332);
})()
//miniprogram-npm-outsideDeps=["fs","path","util","camelcase","find-up","resolve-from","get-package-type","./load-esm","js-yaml"]
//# sourceMappingURL=index.js.map