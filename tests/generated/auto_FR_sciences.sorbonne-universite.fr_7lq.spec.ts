import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sciences.sorbonne-universite.fr_7lq', ['https://sciences.sorbonne-universite.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
