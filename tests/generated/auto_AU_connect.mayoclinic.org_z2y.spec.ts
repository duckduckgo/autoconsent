import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_connect.mayoclinic.org_z2y', ['https://connect.mayoclinic.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
