import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_defence-network.com_ipl', ['https://defence-network.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
