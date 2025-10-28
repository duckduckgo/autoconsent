import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.finalfantasyxiv.com_30g', ['https://fr.finalfantasyxiv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
