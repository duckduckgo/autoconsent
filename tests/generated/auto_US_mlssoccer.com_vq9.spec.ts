import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mlssoccer.com_vq9', ['https://www.mlssoccer.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
