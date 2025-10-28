import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_comment-economiser.fr_o6y', ['https://www.comment-economiser.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
