import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schweiztrendshop.ch_l4r', ['https://schweiztrendshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
