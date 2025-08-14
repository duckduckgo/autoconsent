import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_strauss.com_qji', ['https://www.strauss.com/de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
