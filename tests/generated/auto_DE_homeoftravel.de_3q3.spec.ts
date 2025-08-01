import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_homeoftravel.de_3q3', ['https://homeoftravel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
