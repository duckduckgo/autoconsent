import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_caroll.com_2wn', ['https://www.caroll.com/fr_fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
