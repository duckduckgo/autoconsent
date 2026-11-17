import generateCMPTests from '../playwright/runner';

generateCMPTests('sitevision', [
    'https://www.lansstyrelsen.se/',
    'https://www.norrkoping.se/',
    'https://www.skara.se/',
    'https://www.varnamo.se/',
    'https://www.uppsalavatten.se/',
    'https://malmo.se/',
    'https://www.lund.se/',
    'https://www.uu.se/',
    // no "necessary only" button, opt-out goes through the settings view
    'https://www.skolverket.se/',
    'https://www.soderhamn.se/',
    'https://www.herjedalen.se/',
]);
