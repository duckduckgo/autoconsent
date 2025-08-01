import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-goettingen.de_rr4', ['https://www.uni-goettingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
