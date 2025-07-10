import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_orbitonline.com_net', ['https://www.orbitonline.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
