import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lecode.laposte.fr_i31', ['https://www.lecode.laposte.fr/passermonexamenducodeaveclaposte/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
