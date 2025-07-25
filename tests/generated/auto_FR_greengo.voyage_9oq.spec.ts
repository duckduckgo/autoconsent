import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_greengo.voyage_9oq', ['https://www.greengo.voyage/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
