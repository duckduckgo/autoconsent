import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pcastuces.com_qea', ['https://www.pcastuces.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
