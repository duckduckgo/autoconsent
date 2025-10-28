import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_krankenhaus.de_csc', ['https://www.krankenhaus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
