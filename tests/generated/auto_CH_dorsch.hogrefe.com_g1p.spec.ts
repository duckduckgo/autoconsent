import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dorsch.hogrefe.com_g1p', ['https://dorsch.hogrefe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
