import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_eoa.umontreal.ca_xq2', ['https://eoa.umontreal.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
