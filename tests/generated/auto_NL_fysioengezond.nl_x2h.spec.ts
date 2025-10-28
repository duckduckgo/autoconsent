import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fysioengezond.nl_x2h', ['https://fysioengezond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
