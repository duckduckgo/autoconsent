import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ticketswap.fr_7y4', ['https://www.ticketswap.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
