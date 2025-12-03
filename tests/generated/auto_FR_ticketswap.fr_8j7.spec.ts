import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ticketswap.fr_8j7', ['https://www.ticketswap.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
