import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_u-picardie.fr_fml', ['https://www.u-picardie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
