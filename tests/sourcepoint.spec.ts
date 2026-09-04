import generateCMPTests from '../playwright/runner';

// The top-frame sourcepoint-top rule hides the message container as soon as it appears,
// without waiting to see whether Sourcepoint-frame can reject inside the iframe. Both rules
// therefore complete on sites that do offer a free reject, so two autoconsentDone messages
// per page is expected here rather than a sign of a reload loop.
const bothRulesComplete = { expectedRuns: 2 };

generateCMPTests('Sourcepoint-frame', ['https://news.sky.com/', 'https://www.economist.com/', 'https://www.carwow.co.uk/'], bothRulesComplete);

// The Guardian serves a "consent or pay" wall in the EU/EEA and UK, where Sourcepoint-frame
// bails and only sourcepoint-top acts; the remaining regions get a free-reject popup.
generateCMPTests('Sourcepoint-frame', ['https://www.theguardian.com/'], {
    ...bothRulesComplete,
    skipRegions: ['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'PL', 'SE', 'NO', 'DK', 'CH'],
});

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
        ...bothRulesComplete,
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
