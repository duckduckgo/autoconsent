import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_broadcaststoreeurope.com_d2h', ['https://broadcaststoreeurope.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
