import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cimetieres-de-france.fr_mp2', ['https://www.cimetieres-de-france.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
