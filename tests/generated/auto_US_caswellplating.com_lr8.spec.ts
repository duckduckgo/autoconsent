import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_caswellplating.com_lr8', ['https://caswellplating.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
