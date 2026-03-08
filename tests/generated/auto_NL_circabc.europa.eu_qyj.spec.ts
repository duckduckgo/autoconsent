import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_circabc.europa.eu_qyj', ['https://circabc.europa.eu/ui/welcome'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
