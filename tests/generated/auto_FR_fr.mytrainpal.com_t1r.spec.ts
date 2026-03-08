import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.mytrainpal.com_t1r', ['https://fr.mytrainpal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
