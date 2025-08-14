import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_golfbidder.co.uk_xs6', ['https://www.golfbidder.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
