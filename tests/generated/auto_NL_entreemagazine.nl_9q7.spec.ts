import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_entreemagazine.nl_9q7', ['https://www.entreemagazine.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
