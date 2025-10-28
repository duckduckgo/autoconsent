import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-osnabrueck.de_079', ['https://www.uni-osnabrueck.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
