import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_worldathletics.org_l9t', ['https://worldathletics.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
