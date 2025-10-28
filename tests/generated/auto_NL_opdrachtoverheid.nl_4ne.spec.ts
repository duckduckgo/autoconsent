import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_opdrachtoverheid.nl_4ne', ['https://www.opdrachtoverheid.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
