import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stereoboard.com_k2p', ['https://www.stereoboard.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
