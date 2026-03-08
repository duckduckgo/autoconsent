import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_favv-afsca.be_kkm', ['https://favv-afsca.be/language_selection_page?destination=/node/7'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
