import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bewegingdenk.nl_8rs', ['https://www.bewegingdenk.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
