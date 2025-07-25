import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_united-domains.de_9xw', ['https://www.united-domains.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
