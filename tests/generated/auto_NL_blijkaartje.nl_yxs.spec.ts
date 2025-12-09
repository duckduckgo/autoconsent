import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_blijkaartje.nl_yxs', ['https://www.blijkaartje.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
