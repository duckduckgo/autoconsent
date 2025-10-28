import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_electroworld.nl_q0v', ['https://www.electroworld.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
