import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cam.start.canon_z06', ['https://cam.start.canon/en/C011/manual/html/UG-05_Shooting-1_0030.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
