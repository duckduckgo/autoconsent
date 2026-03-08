import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_frontiercreditunion.com_cg1', ['https://frontiercreditunion.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
