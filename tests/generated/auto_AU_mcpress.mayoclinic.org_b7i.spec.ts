import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_mcpress.mayoclinic.org_b7i', ['https://mcpress.mayoclinic.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
