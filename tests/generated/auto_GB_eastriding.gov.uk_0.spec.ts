import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eastriding.gov.uk_0', ['https://www.eastriding.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
