import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aide.direct-assurance.fr_wrr', ['https://aide.direct-assurance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
