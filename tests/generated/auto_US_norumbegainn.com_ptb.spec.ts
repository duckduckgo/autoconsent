import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_norumbegainn.com_ptb', ['https://norumbegainn.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
