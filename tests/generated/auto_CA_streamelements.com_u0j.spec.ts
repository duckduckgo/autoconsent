import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_streamelements.com_u0j', ['https://streamelements.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
