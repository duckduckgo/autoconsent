import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rolls-royce.com_0', ['https://www.rolls-royce.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
