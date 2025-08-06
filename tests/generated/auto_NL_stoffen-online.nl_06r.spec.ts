import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stoffen-online.nl_06r', ['https://www.stoffen-online.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
