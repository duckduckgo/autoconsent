import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dutchheating.nl_jp8', ['https://dutchheating.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
