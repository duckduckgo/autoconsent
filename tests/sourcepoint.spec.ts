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

// Sites that show a Sourcepoint "consent or pay" paywall (sp_choice_type_9).
// The rule is expected to detect the CMP but bail on detectPopup so we don't
// click the wrong button. These sites need a site-level exception in
// duckduckgo/privacy-configuration to fully suppress autoconsent.
generateCMPTests('Sourcepoint-frame', ['https://www.mumsnet.com/'], {
    onlyRegions: ['GB'],
    expectPopupOpen: false,
    testOptIn: false,
    testOptOut: false,
    testSelfTest: false,
});
