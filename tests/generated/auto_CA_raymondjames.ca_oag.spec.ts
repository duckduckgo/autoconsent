import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_raymondjames.ca_oag', ['https://www.raymondjames.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
