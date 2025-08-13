import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lte-anbieter.info_mwd', ['https://www.lte-anbieter.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
