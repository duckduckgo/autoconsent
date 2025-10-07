import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_qehomelinens.com_3w6', ['https://www.qehomelinens.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
