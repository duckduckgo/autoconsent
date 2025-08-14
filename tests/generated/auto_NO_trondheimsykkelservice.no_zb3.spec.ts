import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_trondheimsykkelservice.no_zb3', ['https://trondheimsykkelservice.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
