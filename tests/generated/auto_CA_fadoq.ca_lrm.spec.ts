import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fadoq.ca_lrm', ['https://www.fadoq.ca/reseau/?popup'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
