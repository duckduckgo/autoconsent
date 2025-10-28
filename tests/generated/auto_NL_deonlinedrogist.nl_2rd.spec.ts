import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deonlinedrogist.nl_2rd', ['https://www.deonlinedrogist.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
