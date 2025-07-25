import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bookchoice.com_eod', ['https://www.bookchoice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
