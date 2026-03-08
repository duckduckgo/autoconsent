import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pavillon-de-la-reine.com_gs7', ['https://en.pavillon-de-la-reine.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
