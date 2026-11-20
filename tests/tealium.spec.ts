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
    'https://www.telekom.de/',
    'https://www.telekom.com/',
    'https://www.t-systems.com/',
    'https://www.mainova.de/',
]);

// preferences prompt variant; the popup shows inconsistently to US visitors
generateCMPTests('Tealium', ['https://www.keurig.ca/'], {
    skipRegions: ['US'],
});

// custom templates rendered inside the Tealium containers; utag consent state is preset before the user decides
generateCMPTests('Tealium', ['https://www.jacquielawson.com/'], {
    skipRegions: ['US'],
});

// dismissed banner collapses to a 0x0 fixed element, which still counts as visible for the self test
generateCMPTests('Tealium', ['https://www.crocs.co.uk/', 'https://www.crocs.fr/'], {
    skipRegions: ['US'],
    testSelfTest: false,
});
