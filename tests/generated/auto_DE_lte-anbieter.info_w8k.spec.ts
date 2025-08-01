import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lte-anbieter.info_w8k', ['https://www.lte-anbieter.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
