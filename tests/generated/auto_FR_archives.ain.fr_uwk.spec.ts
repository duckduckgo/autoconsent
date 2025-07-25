import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.ain.fr_uwk', ['https://www.archives.ain.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
