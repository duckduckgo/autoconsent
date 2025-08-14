import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bookchoice.com_1m6', ['https://www.bookchoice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
