import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_structube.com_w86', ['https://www.structube.com/en_ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
