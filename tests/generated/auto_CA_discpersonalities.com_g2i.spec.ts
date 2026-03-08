import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_discpersonalities.com_g2i', ['https://discpersonalities.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
