import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stubhub.co.uk_otb', ['https://www.stubhub.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
