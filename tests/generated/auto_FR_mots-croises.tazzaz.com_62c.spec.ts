import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mots-croises.tazzaz.com_62c', ['https://mots-croises.tazzaz.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
