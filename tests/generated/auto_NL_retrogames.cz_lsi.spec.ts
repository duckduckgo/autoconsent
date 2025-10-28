import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_retrogames.cz_lsi', ['https://www.retrogames.cz/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
