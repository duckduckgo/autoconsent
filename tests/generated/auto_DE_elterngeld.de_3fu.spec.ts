import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elterngeld.de_3fu', ['https://www.elterngeld.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
