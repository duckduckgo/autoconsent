import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_camping-outdoorshop.de_oo4', ['https://www.camping-outdoorshop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
