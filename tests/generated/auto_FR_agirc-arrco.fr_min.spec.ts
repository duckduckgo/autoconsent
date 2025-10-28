import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agirc-arrco.fr_min', ['https://www.agirc-arrco.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
