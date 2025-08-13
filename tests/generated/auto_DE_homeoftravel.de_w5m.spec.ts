import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_homeoftravel.de_w5m', ['https://homeoftravel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
