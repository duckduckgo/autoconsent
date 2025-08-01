import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_discover.research.utoronto.ca_mlb', ['https://discover.research.utoronto.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
