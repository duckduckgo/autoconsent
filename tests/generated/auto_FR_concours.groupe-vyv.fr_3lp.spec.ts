import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_concours.groupe-vyv.fr_3lp', ['https://concours.groupe-vyv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
