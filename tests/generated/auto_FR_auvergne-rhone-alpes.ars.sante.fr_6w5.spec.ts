import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_auvergne-rhone-alpes.ars.sante.fr_6w5', ['https://www.auvergne-rhone-alpes.ars.sante.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
