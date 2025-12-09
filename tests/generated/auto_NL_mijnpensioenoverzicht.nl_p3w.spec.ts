import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mijnpensioenoverzicht.nl_p3w', ['https://www.mijnpensioenoverzicht.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
