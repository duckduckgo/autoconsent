import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_homeoftravel.de_al7', ['https://homeoftravel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
