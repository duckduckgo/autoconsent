import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_steelseries.com_pny', ['https://steelseries.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
