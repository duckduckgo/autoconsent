import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_snapfish.co.uk_c4l', ['https://www.snapfish.co.uk/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
