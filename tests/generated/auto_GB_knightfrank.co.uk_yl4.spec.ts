import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_knightfrank.co.uk_yl4', ['https://www.knightfrank.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
