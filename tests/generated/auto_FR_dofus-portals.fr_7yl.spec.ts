import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dofus-portals.fr_7yl', ['https://dofus-portals.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
