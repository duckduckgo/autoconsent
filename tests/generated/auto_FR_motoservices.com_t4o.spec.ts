import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_motoservices.com_t4o', ['https://www.motoservices.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
