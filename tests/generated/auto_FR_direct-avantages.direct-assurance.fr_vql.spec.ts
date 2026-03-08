import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_direct-avantages.direct-assurance.fr_vql', ['https://direct-avantages.direct-assurance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
