import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_weldricks.co.uk_0', ['https://www.weldricks.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
