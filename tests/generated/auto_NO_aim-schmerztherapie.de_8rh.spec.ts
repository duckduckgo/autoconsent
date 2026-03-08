import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aim-schmerztherapie.de_8rh', ['https://aim-schmerztherapie.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
