import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bls-schiff.ch_cck', ['https://www.bls-schiff.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
