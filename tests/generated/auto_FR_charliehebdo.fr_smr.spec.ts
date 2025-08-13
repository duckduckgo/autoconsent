import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_charliehebdo.fr_smr', ['https://charliehebdo.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
