import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_iphoneaddict.fr_02o', ['https://iphoneaddict.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
