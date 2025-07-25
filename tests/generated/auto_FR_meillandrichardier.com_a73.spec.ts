import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meillandrichardier.com_a73', ['https://www.meillandrichardier.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
