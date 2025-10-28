import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_leroyseafood.com_rkw', ['https://www.leroyseafood.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
