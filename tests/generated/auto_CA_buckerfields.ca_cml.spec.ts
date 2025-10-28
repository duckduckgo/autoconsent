import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_buckerfields.ca_cml', ['https://www.buckerfields.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
