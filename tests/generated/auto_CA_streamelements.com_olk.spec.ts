import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_streamelements.com_olk', ['https://streamelements.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
