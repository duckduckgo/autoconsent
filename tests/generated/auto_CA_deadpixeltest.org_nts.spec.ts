import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_deadpixeltest.org_nts', ['https://deadpixeltest.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
