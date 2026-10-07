import generateCMPTests from '../playwright/runner';

generateCMPTests('Tealium', [
    // 'https://www.bahn.de/', // uses shadow DOM, see https://app.asana.com/0/1201844467387842/1202635343225979/f
    // 'https://www.forcepoint.com/', // custom region picker must be answered before the Tealium prompt shows
    'http://www.tui.com/',
    'https://www.nsandi.com/',
    'https://www.telenor.com/',
    'https://www.allaboutvision.com/',
    'https://www.chs.net/',
    'https://www.nito.no/',
    'https://www.about.hsbc.pl/pl-pl/hsbc-service-delivery',
    'https://www.hsbc.com/',
]);
