import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_worldanvil.com_cp7', ['https://www.worldanvil.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
