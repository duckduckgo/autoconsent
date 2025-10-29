import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_warmtebeheer.nl_0yl', ['https://www.warmtebeheer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
