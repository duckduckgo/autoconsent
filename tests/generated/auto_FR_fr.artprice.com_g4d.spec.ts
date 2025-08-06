import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.artprice.com_g4d', ['https://fr.artprice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
