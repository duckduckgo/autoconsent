import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_united-domains.de_vx5', ['https://www.united-domains.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
