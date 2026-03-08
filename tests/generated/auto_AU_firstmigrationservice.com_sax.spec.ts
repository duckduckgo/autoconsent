import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_firstmigrationservice.com_sax', ['https://firstmigrationservice.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
