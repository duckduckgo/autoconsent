import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_structube.com_xmj', ['https://www.structube.com/en_ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
