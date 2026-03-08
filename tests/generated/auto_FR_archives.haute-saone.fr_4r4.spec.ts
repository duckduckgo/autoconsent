import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.haute-saone.fr_4r4', ['https://archives.haute-saone.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
