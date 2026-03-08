import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_careers.monashhealth.org_ajd', ['https://careers.monashhealth.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
