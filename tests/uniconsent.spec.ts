import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Uniconsent',
    [
        // 'https://sport-stimme.de/', // see https://github.com/duckduckgo/autoconsent/issues/81
        'https://www.sharethrough.com/',
        'https://www.officialcharts.com/',
        'https://www.corvusbelli.com/',
    ],
    {},
);

generateCMPTests('Uniconsent', ['https://www.fut.gg/', 'https://road.cc/'], {
    skipRegions: ['US'],
});
