import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_calendriergratuit.fr_dbt', ['https://www.calendriergratuit.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
