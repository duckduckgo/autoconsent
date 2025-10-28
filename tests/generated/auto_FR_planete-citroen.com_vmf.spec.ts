import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_planete-citroen.com_vmf', ['https://www.planete-citroen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
