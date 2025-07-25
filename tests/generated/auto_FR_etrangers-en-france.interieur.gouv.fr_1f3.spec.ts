import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_etrangers-en-france.interieur.gouv.fr_1f3', ['https://etrangers-en-france.interieur.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
