import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_my.sport.uni-goettingen.de_yrr', ['https://my.sport.uni-goettingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
