import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_scienceshumaines.com_k6e', ['https://www.scienceshumaines.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
