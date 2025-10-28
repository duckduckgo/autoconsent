import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onderdelenplanet.nl_tz4', ['https://onderdelenplanet.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
