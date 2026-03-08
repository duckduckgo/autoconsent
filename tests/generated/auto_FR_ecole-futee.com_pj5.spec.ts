import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ecole-futee.com_pj5', ['https://ecole-futee.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
