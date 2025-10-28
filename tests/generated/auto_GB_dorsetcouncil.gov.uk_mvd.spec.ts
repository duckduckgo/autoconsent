import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dorsetcouncil.gov.uk_mvd', ['https://www.dorsetcouncil.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
