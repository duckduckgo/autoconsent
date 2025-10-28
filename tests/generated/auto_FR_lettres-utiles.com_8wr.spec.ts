import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lettres-utiles.com_8wr', ['https://www.lettres-utiles.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
