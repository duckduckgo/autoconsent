import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_of.moncompteformation.gouv.fr_bdc', ['https://of.moncompteformation.gouv.fr/espace-public/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
