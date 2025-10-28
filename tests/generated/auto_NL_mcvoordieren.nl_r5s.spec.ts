import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mcvoordieren.nl_r5s', ['https://mcvoordieren.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
