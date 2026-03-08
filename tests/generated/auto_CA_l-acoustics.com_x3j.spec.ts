import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_l-acoustics.com_x3j', ['http://www.l-acoustics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
