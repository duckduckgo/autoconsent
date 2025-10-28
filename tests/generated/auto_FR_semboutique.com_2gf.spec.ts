import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_semboutique.com_2gf', ['https://www.semboutique.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
