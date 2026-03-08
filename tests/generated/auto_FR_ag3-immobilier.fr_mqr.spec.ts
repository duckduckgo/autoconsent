import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ag3-immobilier.fr_mqr', ['https://ag3-immobilier.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
