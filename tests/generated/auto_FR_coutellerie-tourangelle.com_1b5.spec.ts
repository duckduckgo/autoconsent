import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_coutellerie-tourangelle.com_1b5', ['https://www.coutellerie-tourangelle.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
