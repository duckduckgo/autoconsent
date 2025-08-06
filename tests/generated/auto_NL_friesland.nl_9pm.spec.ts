import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_friesland.nl_9pm', ['https://www.friesland.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
