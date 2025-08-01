import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_esportsworldcup.com_i06', ['https://esportsworldcup.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
