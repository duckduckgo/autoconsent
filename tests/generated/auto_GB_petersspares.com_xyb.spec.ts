import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_petersspares.com_xyb', ['https://www.petersspares.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
