import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_forum-assures.ameli.fr_ppx', ['https://forum-assures.ameli.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
