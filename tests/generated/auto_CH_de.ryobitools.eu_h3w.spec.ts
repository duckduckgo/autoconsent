import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.ryobitools.eu_h3w', ['https://de.ryobitools.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
