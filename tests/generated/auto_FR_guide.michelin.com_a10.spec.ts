import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guide.michelin.com_a10', ['https://guide.michelin.com/fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
