import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cic-epargnesalariale.fr_3n2', ['https://www.cic-epargnesalariale.fr/fr/epargnants/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
