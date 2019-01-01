import * as singleSpa from 'single-spa';

export function pathPrefix(prefix) {
    return function (location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}

export async function loadApp(name, prefix, appURL, storeURL, globalEventDistributor) {
    let storeModule = {}
    let customProps = { globalEventDistributor: globalEventDistributor }
    let activityFunction;
    
    try {
        storeModule = storeURL ? await SystemJS.import(storeURL) : {default: null}
    } catch (e) {
        console.log(`Could not load store of app ${name}.`, e)
    }

    if (storeModule.default && globalEventDistributor) {
        customProps.store = storeModule.default
        globalEventDistributor.registerStore(storeModule.default)
    }

    if (typeof prefix === 'string') {
        activityFunction = pathPrefix(prefix)
    } else {
        activityFunction = prefix
    }

    singleSpa.registerApplication(name, () => SystemJS.import(appURL), activityFunction, customProps)
}