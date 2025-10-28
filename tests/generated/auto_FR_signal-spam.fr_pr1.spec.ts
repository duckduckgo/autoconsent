import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_signal-spam.fr_pr1', ['https://www.signal-spam.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
