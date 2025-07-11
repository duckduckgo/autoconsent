import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_teaching-vacancies.service.gov.uk_buo', ['https://teaching-vacancies.service.gov.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
