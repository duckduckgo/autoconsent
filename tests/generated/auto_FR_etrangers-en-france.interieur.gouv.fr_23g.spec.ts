import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_etrangers-en-france.interieur.gouv.fr_23g', ['https://etrangers-en-france.interieur.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
