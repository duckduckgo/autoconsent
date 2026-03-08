import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_coolandclean.ch_79q', ['https://coolandclean.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
