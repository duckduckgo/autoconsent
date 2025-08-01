import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_trondheimsykkelservice.no_49h', ['https://trondheimsykkelservice.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
