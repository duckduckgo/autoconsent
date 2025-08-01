import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_belairdirect.com_wic', ['https://www.belairdirect.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
