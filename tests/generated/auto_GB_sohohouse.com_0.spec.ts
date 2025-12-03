import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sohohouse.com_0', ['https://www.sohohouse.com/en-us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
