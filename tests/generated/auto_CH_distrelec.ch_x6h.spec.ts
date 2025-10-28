import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_distrelec.ch_x6h', ['https://www.distrelec.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
