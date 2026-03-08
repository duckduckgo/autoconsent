import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_esco.ec.europa.eu_9n6', ['https://esco.ec.europa.eu/select-language?destination=/node/1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
