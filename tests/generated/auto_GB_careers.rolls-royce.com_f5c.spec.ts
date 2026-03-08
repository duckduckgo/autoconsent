import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.rolls-royce.com_f5c', ['https://careers.rolls-royce.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
