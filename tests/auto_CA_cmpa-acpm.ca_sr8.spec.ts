import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_cmpa-acpm.ca_sr8', ['https://www.cmpa-acpm.ca/en/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
