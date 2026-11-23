import generateCMPTests from '../playwright/runner';
generateCMPTests(
    'fullertonhotels.com',
    ['https://www.fullertonhotels.com/', 'https://www.village-hotels.co.uk/', 'https://www.falkensteiner.com/'],
    {
        testOptIn: false,
        testSelfTest: false,
        onlyRegions: ['AU'],
    },
);

// decline button hidden in the banner, opt-out goes through the preference center
generateCMPTests('fullertonhotels.com', ['https://www.interstatebatteries.com/'], {
    testOptIn: false,
    testSelfTest: false,
});

// older Secure Privacy banner template without button ids (evSpRejectBtn / evSpAcceptBtn classes)
generateCMPTests('fullertonhotels.com', ['https://www.fireangel.co.uk/', 'https://www.scholastic.co.uk/', 'https://doorbraak.be/'], {
    testSelfTest: false,
});
