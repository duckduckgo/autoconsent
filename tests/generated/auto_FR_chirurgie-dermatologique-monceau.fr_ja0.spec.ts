import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chirurgie-dermatologique-monceau.fr_ja0', ['https://chirurgie-dermatologique-monceau.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
