import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.strasbourg.eu_8km', ['https://archives.strasbourg.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
