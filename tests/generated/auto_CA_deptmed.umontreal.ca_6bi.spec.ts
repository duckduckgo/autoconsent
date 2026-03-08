import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_deptmed.umontreal.ca_6bi', ['https://deptmed.umontreal.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
