import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denieuwestermaastricht.nl_o3c', ['https://www.denieuwestermaastricht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
