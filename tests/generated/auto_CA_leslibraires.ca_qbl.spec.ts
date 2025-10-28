import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_leslibraires.ca_qbl', ['https://www.leslibraires.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
