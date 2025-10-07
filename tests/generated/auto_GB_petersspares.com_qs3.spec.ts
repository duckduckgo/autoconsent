import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_petersspares.com_qs3', ['https://www.petersspares.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
