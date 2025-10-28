import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_greentourist.nl_18c', ['https://greentourist.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
