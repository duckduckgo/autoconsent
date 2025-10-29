import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gravelpassion.fr_vps', ['https://www.gravelpassion.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
