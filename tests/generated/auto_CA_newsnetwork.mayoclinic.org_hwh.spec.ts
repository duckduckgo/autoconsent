import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_newsnetwork.mayoclinic.org_hwh', ['https://newsnetwork.mayoclinic.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
