import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schweiztrendshop.ch_k6u', ['https://schweiztrendshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
