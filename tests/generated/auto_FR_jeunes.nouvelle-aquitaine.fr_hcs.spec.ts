import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jeunes.nouvelle-aquitaine.fr_hcs', ['https://jeunes.nouvelle-aquitaine.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
