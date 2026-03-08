import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_executive-education.minesparis.psl.eu_gag', ['https://executive-education.minesparis.psl.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
