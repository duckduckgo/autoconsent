import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hobbyshop-ritter.ch_hcz', ['https://hobbyshop-ritter.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
