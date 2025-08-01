import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_backmarket.co.uk_0', ['https://www.backmarket.co.uk/testchallengepage'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
