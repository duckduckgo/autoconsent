import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_stclaircollege.ca_uju', ['https://www.stclaircollege.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
