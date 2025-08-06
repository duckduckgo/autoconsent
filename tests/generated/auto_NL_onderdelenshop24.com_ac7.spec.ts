import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onderdelenshop24.com_ac7', ['https://www.onderdelenshop24.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
