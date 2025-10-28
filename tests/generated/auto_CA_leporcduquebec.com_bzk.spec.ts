import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_leporcduquebec.com_bzk', ['https://www.leporcduquebec.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
