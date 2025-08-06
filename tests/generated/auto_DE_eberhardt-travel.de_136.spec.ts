import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eberhardt-travel.de_136', ['https://www.eberhardt-travel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
