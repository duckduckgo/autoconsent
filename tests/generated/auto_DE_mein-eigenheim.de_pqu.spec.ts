import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mein-eigenheim.de_pqu', ['https://www.mein-eigenheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
