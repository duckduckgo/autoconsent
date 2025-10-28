import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fotowissen.eu_n26', ['https://www.fotowissen.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
