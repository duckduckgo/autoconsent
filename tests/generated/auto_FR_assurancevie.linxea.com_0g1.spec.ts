import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assurancevie.linxea.com_0g1', ['https://assurancevie.linxea.com/b2b2c/entreesite/EntAccLog'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
