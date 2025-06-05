import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_eurochange.co.uk_0', ['https://www.eurochange.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
