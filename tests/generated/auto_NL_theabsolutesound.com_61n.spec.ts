import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_theabsolutesound.com_61n', ['https://www.theabsolutesound.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
