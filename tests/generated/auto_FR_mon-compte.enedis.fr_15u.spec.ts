import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mon-compte.enedis.fr_15u', ['https://mon-compte.enedis.fr/auth/XUI/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
