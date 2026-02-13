import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_questionsexualite.fr_4l5', ['https://questionsexualite.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
