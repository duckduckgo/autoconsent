import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_glamuse.com_iju', ['https://www.glamuse.com/eu/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
