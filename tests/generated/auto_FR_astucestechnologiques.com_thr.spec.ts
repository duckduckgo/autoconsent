import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_astucestechnologiques.com_thr', ['https://astucestechnologiques.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
