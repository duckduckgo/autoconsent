import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aerztekammer-bw.de_bak', ['https://www.aerztekammer-bw.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
