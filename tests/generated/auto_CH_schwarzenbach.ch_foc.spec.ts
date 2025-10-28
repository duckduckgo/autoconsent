import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schwarzenbach.ch_foc', ['https://www.schwarzenbach.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
