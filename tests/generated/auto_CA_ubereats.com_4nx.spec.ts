import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ubereats.com_4nx', ['https://www.ubereats.com/ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
