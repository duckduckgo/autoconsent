import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_db.rising-gods.de_e5i', ['https://db.rising-gods.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
