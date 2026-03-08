import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bed-and-breakfast.de_mt3', ['https://bed-and-breakfast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
