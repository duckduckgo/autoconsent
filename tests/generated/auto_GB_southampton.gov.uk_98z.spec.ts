import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_southampton.gov.uk_98z', ['https://www.southampton.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
