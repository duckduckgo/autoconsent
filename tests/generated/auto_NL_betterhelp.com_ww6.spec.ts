import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_betterhelp.com_ww6', ['https://www.betterhelp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
