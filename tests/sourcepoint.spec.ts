import generateCMPTests from '../playwright/runner';

generateCMPTests('Sourcepoint-frame', [
    'https://www.theguardian.com/',
    'https://news.sky.com/',
    'https://www.economist.com/',
    'https://www.carwow.co.uk/',
]);

generateCMPTests(
    'Sourcepoint-frame',
    [
        'https://www.insider.com/',
        'https://www.techtarget.com/searchvirtualdesktop/',
        // "https://www.csoonline.com/blogs", // settings button doesn't work
        'https://www.independent.co.uk/',
        'https://reitschuster.de/',
    ],
    {
        skipRegions: ['US', 'GB'],
    },
);

generateCMPTests(
    'Sourcepoint-frame',
    ['https://www.sueddeutsche.de/', 'https://www.derstandard.at/', 'https://www.heise.de/', 'https://www.n-tv.de/'],
    {
        skipRegions: ['US', 'GB', 'FR'],
        expectPopupOpen: false,
        testOptIn: false,
        testOptOut: false,
        testSelfTest: false,
    },
);

// gocompare.com only shows a Sourcepoint banner to GDPR-applicable visitors,
// and is fronted by Imperva bot protection that blocks crawler traffic from
// other regions, so restrict the test to GB.
generateCMPTests('Sourcepoint-frame', ['https://www.gocompare.com/'], {
    onlyRegions: ['GB'],
});
