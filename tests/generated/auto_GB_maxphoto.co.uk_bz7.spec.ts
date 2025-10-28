import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_maxphoto.co.uk_bz7', ['https://www.maxphoto.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
