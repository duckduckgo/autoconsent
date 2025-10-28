import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_defence-network.com_ok7', ['https://defence-network.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
