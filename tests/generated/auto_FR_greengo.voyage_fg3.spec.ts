import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_greengo.voyage_fg3', ['https://www.greengo.voyage/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
