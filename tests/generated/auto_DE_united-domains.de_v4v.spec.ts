import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_united-domains.de_v4v', ['https://www.united-domains.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
