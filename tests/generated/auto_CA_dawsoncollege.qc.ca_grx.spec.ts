import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dawsoncollege.qc.ca_grx', ['https://www.dawsoncollege.qc.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
