import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_l-itineraire.com_446', ['https://www.l-itineraire.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
