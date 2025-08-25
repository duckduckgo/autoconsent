import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-goettingen.de_9v1', ['https://www.uni-goettingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
