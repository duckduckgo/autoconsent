import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sparta-rotterdam.nl_yub', ['https://www.sparta-rotterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
