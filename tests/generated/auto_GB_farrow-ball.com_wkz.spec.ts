import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_farrow-ball.com_wkz', ['https://www.farrow-ball.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
