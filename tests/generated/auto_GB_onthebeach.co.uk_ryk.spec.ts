import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_onthebeach.co.uk_ryk', ['https://www.onthebeach.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
