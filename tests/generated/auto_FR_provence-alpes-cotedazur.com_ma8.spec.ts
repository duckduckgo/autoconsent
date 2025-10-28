import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_provence-alpes-cotedazur.com_ma8', ['https://provence-alpes-cotedazur.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
