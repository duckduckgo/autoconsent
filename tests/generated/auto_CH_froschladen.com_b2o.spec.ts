import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_froschladen.com_b2o', ['https://froschladen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
