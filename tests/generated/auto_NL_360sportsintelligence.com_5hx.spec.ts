import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_360sportsintelligence.com_5hx', ['https://360sportsintelligence.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
