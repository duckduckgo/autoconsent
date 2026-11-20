import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'usercentrics-api',
    [
        'https://hornbach.de',
        'https://dm.de', // unsafe-eval CSP
        'https://usercentrics.com/',
        'https://shopbetreiber-blog.de/',
        'https://www.kia.com/us/en',
        'https://www.sportscheck.com/filialen/dortmund/',
        'https://www.idealo.de/',
        'https://www.condor.com/de/flug-vorbereiten/check-in/vorabend-check-in.jsp', // many-vendor setup; eval-only optOut timed out before the fix
        'https://www.cewe.de/',
        'https://www.gesetze-bayern.de/', // banner renders only inside the shadow root
        'https://www.partslink24.com/', // stale pre-rendered #usercentrics-root in the HTML
    ],
    {
        skipRegions: ['US', 'GB', 'FR'],
    },
);

// banner renders seconds after #usercentrics-root is created; opt-in can exceed the test timeout on slow connections
generateCMPTests('usercentrics-api', ['https://www.flixbus.com.au/'], {
    skipRegions: ['US', 'GB', 'FR'],
    testOptIn: false,
});
