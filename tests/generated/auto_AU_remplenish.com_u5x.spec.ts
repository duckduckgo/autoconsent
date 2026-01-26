import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_remplenish.com_u5x', ['https://www.remplenish.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
