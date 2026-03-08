import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.shop.altrad.com_gg8', ['https://fr.shop.altrad.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
