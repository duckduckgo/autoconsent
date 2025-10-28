import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_golfclubs4cash.co.uk_0wb', ['https://www.golfclubs4cash.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
