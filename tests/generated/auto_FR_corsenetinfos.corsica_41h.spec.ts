import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_corsenetinfos.corsica_41h', ['https://www.corsenetinfos.corsica/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
