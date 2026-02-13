import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stedelijkmuseumschiedam.nl_y6j', ['https://stedelijkmuseumschiedam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
