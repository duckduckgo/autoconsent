import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_discover.research.utoronto.ca_vtf', ['https://discover.research.utoronto.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
