import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_plainte-en-ligne.masecurite.interieur.gouv.fr_zys', ['https://plainte-en-ligne.masecurite.interieur.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
