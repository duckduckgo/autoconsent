import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.spankbang.com_g9k', ['https://fr.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
