import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_norumbegainn.com_2j1', ['https://norumbegainn.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
