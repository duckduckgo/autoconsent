import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_energie.partenaire-edf.fr_s0i', ['https://energie.partenaire-edf.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
