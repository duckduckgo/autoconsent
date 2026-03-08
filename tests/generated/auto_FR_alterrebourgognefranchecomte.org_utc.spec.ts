import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alterrebourgognefranchecomte.org_utc', ['https://alterrebourgognefranchecomte.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
