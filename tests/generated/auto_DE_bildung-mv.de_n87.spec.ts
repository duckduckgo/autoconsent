import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bildung-mv.de_n87', ['https://www.bildung-mv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
