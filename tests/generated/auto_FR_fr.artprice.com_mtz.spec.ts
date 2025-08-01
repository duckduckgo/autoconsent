import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.artprice.com_mtz', ['https://fr.artprice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
