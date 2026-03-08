import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_careers.rtx.com_a7f', ['https://careers.rtx.com/global/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
