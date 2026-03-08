import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_design.sis.gov.uk_5wc', ['https://design.sis.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
