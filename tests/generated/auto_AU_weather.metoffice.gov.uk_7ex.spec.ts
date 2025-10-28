import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_weather.metoffice.gov.uk_7ex', ['https://www.metoffice.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
