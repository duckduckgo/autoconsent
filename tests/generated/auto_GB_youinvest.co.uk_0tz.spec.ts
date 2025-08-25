import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_youinvest.co.uk_0tz', ['https://www.ajbell.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
