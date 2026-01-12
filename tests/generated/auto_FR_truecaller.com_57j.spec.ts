import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_truecaller.com_57j', ['https://www.truecaller.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
