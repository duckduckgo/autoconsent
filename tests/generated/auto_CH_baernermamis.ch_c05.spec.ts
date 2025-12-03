import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baernermamis.ch_c05', ['https://www.baernermamis.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
