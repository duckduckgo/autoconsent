import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_associations.sg.fr_n6g', ['https://associations.sg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
