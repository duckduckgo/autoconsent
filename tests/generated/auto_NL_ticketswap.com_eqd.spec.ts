import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ticketswap.com_eqd', ['https://www.ticketswap.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
