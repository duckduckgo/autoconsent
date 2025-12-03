import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives71.fr_zl8', ['https://www.archives71.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
