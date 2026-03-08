import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amenagement-durable.ecologie.gouv.fr_87o', ['https://amenagement-durable.ecologie.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
