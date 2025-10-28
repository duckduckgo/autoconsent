import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_groupe-uneo.fr_bh7', ['https://www.groupe-uneo.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
