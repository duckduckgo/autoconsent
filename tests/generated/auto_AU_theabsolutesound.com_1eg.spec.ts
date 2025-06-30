import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_theabsolutesound.com_1eg', ['https://www.theabsolutesound.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
