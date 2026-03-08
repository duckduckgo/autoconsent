import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_darmon-avocat-divorce.fr_vr6', ['https://darmon-avocat-divorce.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
