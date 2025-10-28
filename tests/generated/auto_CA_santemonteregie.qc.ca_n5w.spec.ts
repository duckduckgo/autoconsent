import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_santemonteregie.qc.ca_n5w', ['https://www.santemonteregie.qc.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
