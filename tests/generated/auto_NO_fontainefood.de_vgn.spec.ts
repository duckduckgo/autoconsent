import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fontainefood.de_vgn', ['https://fontainefood.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
