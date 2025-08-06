import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_handy-deutschland.de_bcs', ['https://www.handy-deutschland.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
