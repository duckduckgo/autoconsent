import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_scholenopdekaart.nl_qdr', ['https://scholenopdekaart.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
