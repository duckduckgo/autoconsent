import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dataspace.copernicus.eu_rzp', ['https://dataspace.copernicus.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
