import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_design911.co.uk_0', ['https://www.design911.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
