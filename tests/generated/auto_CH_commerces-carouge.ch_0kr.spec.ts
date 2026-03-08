import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_commerces-carouge.ch_0kr', ['https://commerces-carouge.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
