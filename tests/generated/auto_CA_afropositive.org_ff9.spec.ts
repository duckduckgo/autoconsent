import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_afropositive.org_ff9', ['https://afropositive.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
