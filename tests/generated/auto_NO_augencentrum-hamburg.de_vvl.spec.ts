import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_augencentrum-hamburg.de_vvl', ['https://augencentrum-hamburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
