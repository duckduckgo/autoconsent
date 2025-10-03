import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_maths.cam.ac.uk_wtp', ['https://www.maths.cam.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
