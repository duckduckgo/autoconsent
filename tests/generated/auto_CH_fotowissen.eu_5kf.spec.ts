import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fotowissen.eu_5kf', ['https://www.fotowissen.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
