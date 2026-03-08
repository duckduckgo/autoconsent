import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cocottebistro.com_m35', ['https://cocottebistro.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
