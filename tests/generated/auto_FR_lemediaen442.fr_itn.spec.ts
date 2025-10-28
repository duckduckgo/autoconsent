import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lemediaen442.fr_itn', ['https://lemediaen442.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
