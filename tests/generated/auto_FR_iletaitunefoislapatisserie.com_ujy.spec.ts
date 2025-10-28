import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_iletaitunefoislapatisserie.com_ujy', ['https://www.iletaitunefoislapatisserie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
