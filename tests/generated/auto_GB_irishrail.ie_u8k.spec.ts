import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_irishrail.ie_u8k', ['https://www.irishrail.ie/en-ie/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
