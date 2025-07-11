import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_golfbidder.co.uk_v45', ['https://www.golfbidder.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
