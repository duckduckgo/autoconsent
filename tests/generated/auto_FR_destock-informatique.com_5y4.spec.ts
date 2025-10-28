import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_destock-informatique.com_5y4', ['https://www.destock-informatique.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
