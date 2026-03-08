import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arts-forains.com_t2j', ['https://arts-forains.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
