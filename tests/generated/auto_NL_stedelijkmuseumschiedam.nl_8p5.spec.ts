import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stedelijkmuseumschiedam.nl_8p5', ['https://stedelijkmuseumschiedam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
