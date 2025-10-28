import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arnaqueoufiable.com_k2l', ['https://arnaqueoufiable.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
