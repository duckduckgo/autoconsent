import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sudoc.abes.fr_ilu', ['https://www.sudoc.abes.fr/cbs/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
