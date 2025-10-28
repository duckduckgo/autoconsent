import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_armedangels.com_v3a', ['https://www.armedangels.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
