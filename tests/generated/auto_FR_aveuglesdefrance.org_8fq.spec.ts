import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aveuglesdefrance.org_8fq', ['https://aveuglesdefrance.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
