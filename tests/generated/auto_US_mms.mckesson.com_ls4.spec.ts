import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mms.mckesson.com_ls4', ['https://mms.mckesson.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
