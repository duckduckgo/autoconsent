import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lexikon.stangl.eu_y8w', ['https://lexikon.stangl.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
