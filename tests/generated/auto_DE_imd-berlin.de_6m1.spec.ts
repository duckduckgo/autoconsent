import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_imd-berlin.de_6m1', ['https://www.imd-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
