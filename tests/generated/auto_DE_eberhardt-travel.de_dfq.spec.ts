import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eberhardt-travel.de_dfq', ['https://www.eberhardt-travel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
