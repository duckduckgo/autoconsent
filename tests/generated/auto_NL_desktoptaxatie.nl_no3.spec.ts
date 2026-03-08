import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_desktoptaxatie.nl_no3', ['https://desktoptaxatie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
