import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_flyingtiger.com_lur', ['https://flyingtiger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
