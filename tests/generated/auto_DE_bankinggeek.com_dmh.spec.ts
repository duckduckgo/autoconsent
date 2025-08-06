import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bankinggeek.com_dmh', ['https://bankinggeek.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
