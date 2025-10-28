import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_croftmill.co.uk_xgz', ['https://www.croftmill.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
