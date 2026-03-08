import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_billionaire-casino.com_u0a', ['https://billionaire-casino.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
