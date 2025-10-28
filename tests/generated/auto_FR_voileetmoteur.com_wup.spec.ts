import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_voileetmoteur.com_wup', ['https://www.voileetmoteur.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
