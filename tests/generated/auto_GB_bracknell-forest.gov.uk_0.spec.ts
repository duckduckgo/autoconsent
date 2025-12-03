import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bracknell-forest.gov.uk_0', ['https://www.bracknell-forest.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
