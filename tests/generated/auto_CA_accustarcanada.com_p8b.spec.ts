import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_accustarcanada.com_p8b', ['https://accustarcanada.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
