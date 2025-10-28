import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_infos-nantes.fr_j3m', ['https://www.infos-nantes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
