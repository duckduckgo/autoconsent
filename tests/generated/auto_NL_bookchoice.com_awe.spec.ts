import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bookchoice.com_awe', ['https://www.bookchoice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
