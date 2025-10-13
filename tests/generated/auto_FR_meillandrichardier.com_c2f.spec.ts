import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meillandrichardier.com_c2f', ['https://www.meillandrichardier.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
