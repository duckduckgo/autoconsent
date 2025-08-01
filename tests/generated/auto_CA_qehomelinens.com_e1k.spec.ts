import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_qehomelinens.com_e1k', ['https://www.qehomelinens.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
