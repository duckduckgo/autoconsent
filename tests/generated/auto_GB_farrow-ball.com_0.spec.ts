import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_farrow-ball.com_0', ['https://www.farrow-ball.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
