import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_coastfashion.com_7hq', ['https://www.coastfashion.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
