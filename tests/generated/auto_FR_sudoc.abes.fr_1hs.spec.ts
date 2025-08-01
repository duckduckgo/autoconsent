import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sudoc.abes.fr_1hs', ['https://www.sudoc.abes.fr/cbs/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
