import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_deadairsilencers.com_2qx', ['https://deadairsilencers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
