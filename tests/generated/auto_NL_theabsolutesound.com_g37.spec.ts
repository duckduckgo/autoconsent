import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_theabsolutesound.com_g37', ['https://www.theabsolutesound.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
