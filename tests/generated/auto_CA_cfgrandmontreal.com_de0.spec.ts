import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cfgrandmontreal.com_de0', ['https://cfgrandmontreal.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
