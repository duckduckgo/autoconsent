import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dierendokters.com_576', ['https://www.dierendokters.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
