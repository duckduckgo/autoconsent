import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_etrangers-en-france.interieur.gouv.fr_pqi', ['https://etrangers-en-france.interieur.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
