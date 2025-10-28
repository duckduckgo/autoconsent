import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lyonaeroports.com_2ld', ['https://www.lyonaeroports.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
