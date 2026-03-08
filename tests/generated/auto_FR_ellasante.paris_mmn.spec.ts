import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ellasante.paris_mmn', ['https://ellasante.paris/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
