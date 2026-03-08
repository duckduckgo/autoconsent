import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_frelonsolution.fr_bbi', ['https://frelonsolution.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
