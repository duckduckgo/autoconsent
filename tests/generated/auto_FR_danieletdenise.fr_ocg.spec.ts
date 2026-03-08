import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_danieletdenise.fr_ocg', ['https://danieletdenise.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
