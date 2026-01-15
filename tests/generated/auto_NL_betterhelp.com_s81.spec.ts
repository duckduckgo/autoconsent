import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_betterhelp.com_s81', ['https://www.betterhelp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
