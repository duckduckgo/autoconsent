import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_truecaller.com_sdg', ['https://www.truecaller.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
