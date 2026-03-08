import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_en.flamsbrygga.no_zwd', ['https://en.flamsbrygga.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
