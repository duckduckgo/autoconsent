import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cds.climate.copernicus.eu_f6x', ['https://cds.climate.copernicus.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
