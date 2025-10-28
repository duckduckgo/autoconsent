import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_consoglobe.com_2w0', ['https://www.consoglobe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
