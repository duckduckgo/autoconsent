import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.airespace.defense.gouv.fr_rqp', ['https://boutique.airespace.defense.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
