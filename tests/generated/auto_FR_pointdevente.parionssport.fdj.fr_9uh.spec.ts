import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pointdevente.parionssport.fdj.fr_9uh', ['https://www.pointdevente.parionssport.fdj.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
