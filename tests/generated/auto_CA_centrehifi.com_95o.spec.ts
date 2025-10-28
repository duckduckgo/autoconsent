import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_centrehifi.com_95o', ['https://www.centrehifi.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
