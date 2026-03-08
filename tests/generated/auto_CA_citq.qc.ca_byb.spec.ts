import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_citq.qc.ca_byb', ['https://citq.qc.ca/fr/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
