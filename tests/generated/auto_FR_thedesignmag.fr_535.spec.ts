import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_thedesignmag.fr_535', ['https://thedesignmag.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
