import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_stclaircollege.ca_fj8', ['https://www.stclaircollege.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
