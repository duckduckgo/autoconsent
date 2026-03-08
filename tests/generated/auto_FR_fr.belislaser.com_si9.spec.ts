import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.belislaser.com_si9', ['https://fr.belislaser.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
