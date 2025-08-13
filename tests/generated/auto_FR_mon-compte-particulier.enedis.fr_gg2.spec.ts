import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mon-compte-particulier.enedis.fr_gg2', ['https://mon-compte.enedis.fr/auth/XUI/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
