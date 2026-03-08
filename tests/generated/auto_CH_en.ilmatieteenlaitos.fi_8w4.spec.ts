import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_en.ilmatieteenlaitos.fi_8w4', ['https://en.ilmatieteenlaitos.fi/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
