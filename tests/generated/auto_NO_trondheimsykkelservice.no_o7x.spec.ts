import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_trondheimsykkelservice.no_o7x', ['https://trondheimsykkelservice.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
