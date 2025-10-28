import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lasecurecrute.fr_vxb', ['https://www.lasecurecrute.fr/accueil'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
