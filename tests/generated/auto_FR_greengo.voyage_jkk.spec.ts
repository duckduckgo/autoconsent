import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_greengo.voyage_jkk', ['https://www.greengo.voyage/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
