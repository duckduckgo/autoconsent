import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_healthcareers.nhs.uk_0', ['https://www.healthcareers.nhs.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
