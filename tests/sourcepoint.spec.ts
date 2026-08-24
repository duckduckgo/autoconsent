import generateCMPTests from '../playwright/runner';

generateCMPTests('Sourcepoint-frame', ['https://news.sky.com/', 'https://www.economist.com/', 'https://www.carwow.co.uk/']);

// The Guardian serves a "consent or pay" wall in the EU/EEA and UK (handled by the
// theguardian.com cosmetic rule); only the remaining regions get a free-reject popup.
generateCMPTests('Sourcepoint-frame', ['https://www.theguardian.com/'], {
    skipRegions: ['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'PL', 'SE', 'NO', 'DK', 'CH'],
});

// US National notices render their privacy manager in a sibling frame, and the manager
// uses "Off/On" toggles instead of the GDPR reject/save buttons.
// Bloomberg only renders the notice reliably on article pages, not on the front page.
generateCMPTests(
    'Sourcepoint-frame',
    [
        'https://news.bloomberglaw.com/bankruptcy-law/google-aims-to-boost-ai-with-purchase-of-spirit-airlines-data',
        'https://www.abc15.com/',
        'https://www.refinery29.com/',
    ],
    {
        onlyRegions: ['US'],
        // the notice frame and the privacy manager frame each complete their own run
        expectedRuns: 2,
    },
);

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
