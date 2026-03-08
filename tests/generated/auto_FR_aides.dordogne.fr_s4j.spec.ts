import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aides.dordogne.fr_s4j', ['https://aides.dordogne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
