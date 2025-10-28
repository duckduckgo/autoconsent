import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_toureiffel.paris_dfq', ['https://www.toureiffel.paris/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
