import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.spankbang.com_har', ['https://fr.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
