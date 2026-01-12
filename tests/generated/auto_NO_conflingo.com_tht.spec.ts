import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_conflingo.com_tht', ['https://www.conflingo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
