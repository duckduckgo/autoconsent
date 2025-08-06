import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hellowork.com_irs', ['https://www.hellowork.com/fr-fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
