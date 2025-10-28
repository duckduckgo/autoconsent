import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bacfrancais.com_3wq', ['https://www.bacfrancais.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
