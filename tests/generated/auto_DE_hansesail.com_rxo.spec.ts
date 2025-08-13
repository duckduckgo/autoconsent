import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hansesail.com_rxo', ['https://www.hansesail.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
