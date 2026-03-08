import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fitness.tchibo.de_0ds', ['https://fitness.tchibo.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
