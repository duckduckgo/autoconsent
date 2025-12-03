import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cutterbuck.com_ko7', ['https://cutterbuck.com/men/polos/?tab=products'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
