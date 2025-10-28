import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_genealogic.review_2ff', ['https://genealogic.review/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
