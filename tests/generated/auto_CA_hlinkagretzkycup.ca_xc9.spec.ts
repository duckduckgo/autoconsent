import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hlinkagretzkycup.ca_xc9', ['https://www.hlinkagretzkycup.ca/en-ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
