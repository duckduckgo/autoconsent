import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_coutellerie-tourangelle.com_wr2', ['https://www.coutellerie-tourangelle.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
