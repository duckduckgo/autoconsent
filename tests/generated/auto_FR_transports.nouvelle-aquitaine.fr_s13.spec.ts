import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_transports.nouvelle-aquitaine.fr_s13', ['https://transports.nouvelle-aquitaine.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
