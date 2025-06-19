import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_knightfrank.co.uk_lhm', ['https://www.knightfrank.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
