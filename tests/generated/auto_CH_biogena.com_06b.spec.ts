import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_biogena.com_06b', ['https://biogena.com/en?show_lang=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
