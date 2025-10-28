import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_biel-bienne.ch_nqw', ['https://www.biel-bienne.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
