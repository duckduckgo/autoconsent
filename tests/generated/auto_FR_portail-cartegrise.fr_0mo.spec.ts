import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_portail-cartegrise.fr_0mo', ['https://www.portail-cartegrise.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
