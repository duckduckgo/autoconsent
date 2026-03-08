import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bauernschaenke.ch_4kz', ['https://bauernschaenke.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
