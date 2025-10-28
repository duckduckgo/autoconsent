import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_proxi-totalenergies.fr_w83', ['https://www.proxi-totalenergies.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
