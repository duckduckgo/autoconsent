import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ticketswap.com_nfe', ['https://www.ticketswap.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
