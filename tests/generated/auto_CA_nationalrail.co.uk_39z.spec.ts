import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_nationalrail.co.uk_39z', ['https://www.nationalrail.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
