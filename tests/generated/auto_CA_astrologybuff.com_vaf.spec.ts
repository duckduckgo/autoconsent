import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_astrologybuff.com_vaf', ['https://astrologybuff.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
