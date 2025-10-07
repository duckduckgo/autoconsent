import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_alliander.com_swt', ['https://www.alliander.com/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
