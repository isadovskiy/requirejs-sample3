({
    appDir: '../src',
    dir: '../www',
    mainConfigFile: '../src/sample/config.js',
    baseUrl: '.',
    modules: [
        {
            name: 'sample/app',
            exclude: [
                'jquery'
            ]
        }
    ],
    stubModules1: [
        'sample/plugin',
        'sample/dependency',
        'sample/dependency-core',
        'sample/dependency-core-builder'
    ],
    findNestedDependencies: false,
    optimize: 'none',
    skipDirOptimize: true,
    generateSourceMaps: false,
	removeCombined: false,
    preserveLicenseComments: false
})
