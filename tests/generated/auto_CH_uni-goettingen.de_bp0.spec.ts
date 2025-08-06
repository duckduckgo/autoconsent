import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_uni-goettingen.de_bp0', ['https://www.uni-goettingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
