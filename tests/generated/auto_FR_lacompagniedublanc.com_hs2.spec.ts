import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lacompagniedublanc.com_hs2', ['https://www.lacompagniedublanc.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
