import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_croisieurope.com_xqw', ['https://www.croisieurope.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
