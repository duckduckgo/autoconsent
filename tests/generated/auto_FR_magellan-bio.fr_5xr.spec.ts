import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_magellan-bio.fr_5xr', ['https://www.magellan-bio.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
