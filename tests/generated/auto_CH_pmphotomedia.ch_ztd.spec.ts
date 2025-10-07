import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pmphotomedia.ch_ztd', ['https://www.pmphotomedia.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
