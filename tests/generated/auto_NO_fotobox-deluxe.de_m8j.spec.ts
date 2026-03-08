import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fotobox-deluxe.de_m8j', ['https://fotobox-deluxe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
