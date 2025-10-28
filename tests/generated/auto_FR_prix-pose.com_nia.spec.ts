import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_prix-pose.com_nia', ['https://www.prix-pose.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
