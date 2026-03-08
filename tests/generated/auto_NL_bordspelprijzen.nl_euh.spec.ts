import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bordspelprijzen.nl_euh', ['https://bordspelprijzen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
