import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mein-eigenheim.de_rkg', ['https://www.mein-eigenheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
