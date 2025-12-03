import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_connexxion.nl_lck', ['https://www.connexxion.nl/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
