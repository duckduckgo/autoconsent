import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cybercartes.com_dcb', ['https://www.cybercartes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
