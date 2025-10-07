import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.spankbang.com_ss0', ['https://fr.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
