import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_greengo.voyage_a14', ['https://www.greengo.voyage/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
