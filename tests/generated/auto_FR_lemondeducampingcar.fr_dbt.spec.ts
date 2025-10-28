import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lemondeducampingcar.fr_dbt', ['https://www.lemondeducampingcar.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
