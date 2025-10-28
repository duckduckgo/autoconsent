import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lesimprimantes3d.fr_6zt', ['https://www.lesimprimantes3d.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
