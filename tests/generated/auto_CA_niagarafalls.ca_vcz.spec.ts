import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_niagarafalls.ca_vcz', ['https://niagarafalls.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
