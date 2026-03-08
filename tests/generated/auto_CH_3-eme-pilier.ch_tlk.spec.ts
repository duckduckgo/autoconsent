import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_3-eme-pilier.ch_tlk', ['https://3-eme-pilier.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
