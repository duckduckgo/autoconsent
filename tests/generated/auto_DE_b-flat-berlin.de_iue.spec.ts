import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_b-flat-berlin.de_iue', ['https://b-flat-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
