import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_portofrotterdam.com_v2c', ['https://www.portofrotterdam.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
