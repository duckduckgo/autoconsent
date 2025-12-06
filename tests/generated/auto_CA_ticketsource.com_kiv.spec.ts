import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ticketsource.com_kiv', ['https://www.ticketsource.com/whats-on/hampton-college'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
