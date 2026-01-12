import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pccomponentes.com_ttx', ['https://www.pccomponentes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
