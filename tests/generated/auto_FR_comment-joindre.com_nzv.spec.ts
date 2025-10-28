import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_comment-joindre.com_nzv', ['https://comment-joindre.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
