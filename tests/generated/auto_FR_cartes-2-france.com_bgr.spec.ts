import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cartes-2-france.com_bgr', ['https://www.cartes-2-france.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
