import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cameraworld.co.uk_0', ['https://www.cameraworld.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
