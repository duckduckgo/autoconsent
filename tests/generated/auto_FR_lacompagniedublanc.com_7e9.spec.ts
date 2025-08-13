import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lacompagniedublanc.com_7e9', ['https://www.lacompagniedublanc.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
