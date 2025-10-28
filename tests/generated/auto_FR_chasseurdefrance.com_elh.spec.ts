import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chasseurdefrance.com_elh', ['https://www.chasseurdefrance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
