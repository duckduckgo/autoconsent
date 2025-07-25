import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sports-insider.de_cyt', ['https://www.sports-insider.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
