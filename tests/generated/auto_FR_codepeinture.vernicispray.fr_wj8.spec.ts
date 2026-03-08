import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_codepeinture.vernicispray.fr_wj8', ['https://codepeinture.vernicispray.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
