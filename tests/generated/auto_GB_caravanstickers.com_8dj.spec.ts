import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_caravanstickers.com_8dj', ['https://caravanstickers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
