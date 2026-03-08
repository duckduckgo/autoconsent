import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bibliotheeknieuwegein.nl_uzw', ['https://bibliotheeknieuwegein.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
