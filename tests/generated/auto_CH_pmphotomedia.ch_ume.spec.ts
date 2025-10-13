import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pmphotomedia.ch_ume', ['https://www.pmphotomedia.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
