import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_warwickdc.gov.uk_74u', ['https://www.warwickdc.gov.uk/site/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
