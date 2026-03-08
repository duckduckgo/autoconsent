import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.alsace.eu_5a5', ['https://archives.alsace.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
