// import 'zone.js'
import * as singleSpa from 'single-spa'
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor()

    await loadApp('authentication', () => true, '/pathtoauthentication/singleSpaEntry.js', null, null)
    // await loadApp('home', () => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home'), '/pathtohome/singleSpaEntry.js', '/pathtohome/store.js', globalEventDistributor)
    
    singleSpa.start()
}

init()