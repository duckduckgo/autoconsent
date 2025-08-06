import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lte-anbieter.info_d9a', ['https://www.lte-anbieter.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
