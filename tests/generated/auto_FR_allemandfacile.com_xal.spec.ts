import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_allemandfacile.com_xal', ['https://www.allemandfacile.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
