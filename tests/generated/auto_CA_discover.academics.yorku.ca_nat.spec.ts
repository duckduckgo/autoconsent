import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_discover.academics.yorku.ca_nat', ['https://discover.academics.yorku.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
