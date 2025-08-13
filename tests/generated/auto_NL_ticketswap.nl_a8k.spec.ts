import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ticketswap.nl_a8k', ['https://www.ticketswap.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
