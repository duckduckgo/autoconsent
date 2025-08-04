import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cheapflights.co.uk_0', ['https://www.cheapflights.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
