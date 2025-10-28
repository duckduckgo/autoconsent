import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lincolnshire.gov.uk_7oi', ['https://www.lincolnshire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
