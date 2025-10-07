import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_saint-lambert.ca_ntx', ['https://www.saint-lambert.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
