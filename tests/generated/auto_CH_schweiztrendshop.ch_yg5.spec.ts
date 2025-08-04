import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schweiztrendshop.ch_yg5', ['https://schweiztrendshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
