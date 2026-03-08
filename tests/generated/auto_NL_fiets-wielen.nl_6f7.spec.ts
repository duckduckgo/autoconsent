import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fiets-wielen.nl_6f7', ['https://fiets-wielen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
