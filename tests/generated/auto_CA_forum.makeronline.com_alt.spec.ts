import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_forum.makeronline.com_alt', ['https://forum.makeronline.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
