import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_esportsworldcup.com_0ny', ['https://esportsworldcup.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
