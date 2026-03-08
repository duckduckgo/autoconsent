import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_christelijkereizen.nl_ni6', ['https://christelijkereizen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
