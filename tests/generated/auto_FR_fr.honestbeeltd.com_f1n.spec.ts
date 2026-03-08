import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.honestbeeltd.com_f1n', ['https://fr.honestbeeltd.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
