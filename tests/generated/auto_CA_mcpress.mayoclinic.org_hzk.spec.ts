import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mcpress.mayoclinic.org_hzk', ['https://mcpress.mayoclinic.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
