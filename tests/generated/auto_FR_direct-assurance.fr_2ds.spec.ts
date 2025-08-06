import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_direct-assurance.fr_2ds', ['https://www.direct-assurance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
