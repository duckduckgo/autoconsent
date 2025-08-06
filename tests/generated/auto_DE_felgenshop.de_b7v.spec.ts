import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_felgenshop.de_b7v', ['https://www.felgenshop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
