import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_factionskis.com_g1d', ['https://factionskis.com/en-ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
