import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.bartsparts.com_gmv', ['https://fr.bartsparts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
