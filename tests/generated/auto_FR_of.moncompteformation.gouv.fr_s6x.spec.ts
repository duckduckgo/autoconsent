import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_of.moncompteformation.gouv.fr_s6x', ['https://of.moncompteformation.gouv.fr/espace-public/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
