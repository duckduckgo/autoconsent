import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_maths.cam.ac.uk_zn1', ['https://www.maths.cam.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
