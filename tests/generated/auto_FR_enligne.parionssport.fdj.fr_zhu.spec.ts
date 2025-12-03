import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_enligne.parionssport.fdj.fr_zhu', ['https://www.enligne.parionssport.fdj.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
