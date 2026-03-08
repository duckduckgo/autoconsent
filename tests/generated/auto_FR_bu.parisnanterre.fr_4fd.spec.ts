import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bu.parisnanterre.fr_4fd', ['https://bu.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
