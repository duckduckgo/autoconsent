import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kwakzalverij.nl_ses', ['https://www.kwakzalverij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
