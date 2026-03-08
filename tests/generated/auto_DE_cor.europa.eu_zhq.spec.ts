import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cor.europa.eu_zhq', ['https://cor.europa.eu/en/choose-language'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
