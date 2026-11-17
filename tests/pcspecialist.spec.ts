import generateCMPTests from '../playwright/runner';

// each storefront shows the consent popup only to visitors from its own country (and the UK one also to the US)
generateCMPTests('pcspecialist', ['https://www.pcspecialist.co.uk/'], {
    testSelfTest: false,
    onlyRegions: ['GB', 'US'],
});

generateCMPTests('pcspecialist', ['https://www.pcspecialist.de/'], {
    testSelfTest: false,
    onlyRegions: ['DE'],
});
