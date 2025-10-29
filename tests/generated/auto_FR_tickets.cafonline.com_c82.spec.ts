import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tickets.cafonline.com_c82', ['https://tickets.cafonline.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
