import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monparcourshandicap.gouv.fr_eee', ['https://www.monparcourshandicap.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
