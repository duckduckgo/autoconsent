import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_camping-municipal.annecy.fr_gi2', ['https://camping-municipal.annecy.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
