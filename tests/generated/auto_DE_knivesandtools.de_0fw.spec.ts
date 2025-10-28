import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_knivesandtools.de_0fw', ['https://www.knivesandtools.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
