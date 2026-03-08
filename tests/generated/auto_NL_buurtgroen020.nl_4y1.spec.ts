import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_buurtgroen020.nl_4y1', ['https://buurtgroen020.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
