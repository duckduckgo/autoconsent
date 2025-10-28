import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_connect.mayoclinic.org_2ti', ['https://connect.mayoclinic.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
