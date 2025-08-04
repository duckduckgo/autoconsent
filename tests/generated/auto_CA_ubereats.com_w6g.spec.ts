import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ubereats.com_w6g', ['https://www.ubereats.com/ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
