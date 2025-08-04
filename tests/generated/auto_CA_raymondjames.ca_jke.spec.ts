import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_raymondjames.ca_jke', ['https://www.raymondjames.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
