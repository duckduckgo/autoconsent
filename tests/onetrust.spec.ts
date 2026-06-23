import generateCMPTests from '../playwright/runner';

generateCMPTests('Onetrust', [
    'https://stackoverflow.com/',
    'https://www.lovescout24.de/',
    'https://www.okcupid.com/',
    'https://doodle.com/',
    'https://www.coca-cola.com/us/en',
    'https://www.seur.com/es/index.html',
    'https://satsuite.collegeboard.org/sat/dates-deadlines',
]);

// Legacy Optanon markup previously covered by Consent-O-Matic's com_optanon rule.
generateCMPTests('Onetrust', ['https://www.allianzdirect.de/']);

// Legacy Optanon disables the parent categories and dismisses the popup, but this
// site does not reliably answer the post-dismissal self-test message.
generateCMPTests('Onetrust', ['https://www.thenude.com/'], {
    testSelfTest: false,
});

generateCMPTests('Onetrust', ['https://mailchimp.com/', 'https://www.accenture.com/', 'https://www.zoom.us'], {
    testOptIn: false,
});

// opt-in is not necessary in the US on this sites
generateCMPTests('Onetrust', ['https://mailchimp.com/', 'https://www.accenture.com/', 'https://www.zoom.us'], {
    testOptIn: true,
    testOptOut: false,
    skipRegions: ['US'],
});

generateCMPTests(
    'Onetrust',
    ['https://arstechnica.com/', 'https://www.nvidia.com/', 'https://bitbucket.org/', 'https://www.atlassian.com/'],
    {
        skipRegions: ['US', 'GB'],
    },
);

generateCMPTests('Onetrust', ['https://www.newyorker.com/', 'https://www.adobe.com/de/', 'https://about.gitlab.com'], {
    skipRegions: ['US'],
});

generateCMPTests('Onetrust', ['https://eu.icebreaker.com/de-de?country=DE'], {
    skipRegions: ['US'],
});

// CCPA notice-only banner variant: only a "Close" button, no Accept/Reject/Settings.
// Only appears in the US (CCPA). The rule clicks Close to dismiss the banner; opt-in
// and self-test don't apply (no real consent state to flip).
// See lib/cmps/onetrust.ts for the variant detection.
generateCMPTests(
    'Onetrust',
    [
        'https://www.columbia.com/c/mens-insulated-puffer-jackets/',
        'https://www.mountainhardwear.com/',
        'https://www.prana.com/',
        'https://www.sorel.com/',
    ],
    {
        onlyRegions: ['US'],
        testOptIn: false,
        testSelfTest: false,
    },
);
