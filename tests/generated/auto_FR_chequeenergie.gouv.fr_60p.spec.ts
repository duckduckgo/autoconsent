import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chequeenergie.gouv.fr_60p', ['https://chequeenergie.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
