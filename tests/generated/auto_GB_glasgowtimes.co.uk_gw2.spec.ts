import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_glasgowtimes.co.uk_gw2', ['https://www.glasgowtimes.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
