import generateCMPTests from '../playwright/runner';
generateCMPTests('fullertonhotels.com', ['https://www.fullertonhotels.com/', 'https://www.village-hotels.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

// decline button hidden in the banner, opt-out goes through the preference center
generateCMPTests('fullertonhotels.com', ['https://www.interstatebatteries.com/'], {
    testOptIn: false,
    testSelfTest: false,
});
