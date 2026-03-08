import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_challenges.darkintaqt.com_orn', ['https://challenges.darkintaqt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
