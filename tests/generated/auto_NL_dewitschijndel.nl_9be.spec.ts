import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dewitschijndel.nl_9be', ['https://www.dewitschijndel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
