import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_villesavivre.fr_1xa', ['https://www.villesavivre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
