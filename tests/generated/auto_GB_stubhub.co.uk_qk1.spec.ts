import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stubhub.co.uk_qk1', ['https://www.stubhub.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
