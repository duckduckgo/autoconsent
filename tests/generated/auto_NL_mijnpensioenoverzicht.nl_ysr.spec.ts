import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mijnpensioenoverzicht.nl_ysr', ['https://www.mijnpensioenoverzicht.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
