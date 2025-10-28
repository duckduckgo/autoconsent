import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ersho-distribution.com_nl4', ['https://www.ersho-distribution.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
