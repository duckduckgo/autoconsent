import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_duitsedrogistinhuis.nl_p1y', ['https://duitsedrogistinhuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
