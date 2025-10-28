import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nettbutikk.karasmussen.com_6n6', ['https://nettbutikk.karasmussen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
