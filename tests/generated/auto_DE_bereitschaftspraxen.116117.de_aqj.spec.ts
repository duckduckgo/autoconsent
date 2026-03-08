import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bereitschaftspraxen.116117.de_aqj', ['https://bereitschaftspraxen.116117.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
