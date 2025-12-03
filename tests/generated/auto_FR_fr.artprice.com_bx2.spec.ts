import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.artprice.com_bx2', ['https://fr.artprice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
