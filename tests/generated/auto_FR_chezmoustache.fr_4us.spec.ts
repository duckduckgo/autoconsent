import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chezmoustache.fr_4us', ['https://chezmoustache.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
