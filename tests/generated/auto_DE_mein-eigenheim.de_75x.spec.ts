import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mein-eigenheim.de_75x', ['https://www.mein-eigenheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
