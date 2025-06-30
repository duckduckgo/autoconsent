import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_philips.co.uk_47l', ['https://www.philips.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
