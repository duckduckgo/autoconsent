import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_felgenshop.de_31c', ['https://www.felgenshop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
