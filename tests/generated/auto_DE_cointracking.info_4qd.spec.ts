import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cointracking.info_4qd', ['https://cointracking.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
