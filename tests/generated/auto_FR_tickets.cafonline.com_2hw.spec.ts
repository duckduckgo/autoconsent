import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tickets.cafonline.com_2hw', ['https://tickets.cafonline.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
