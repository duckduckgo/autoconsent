import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ticketswap.nl_va7', ['https://www.ticketswap.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
