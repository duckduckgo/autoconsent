import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_top5jeuxenligne.fr_lsi', ['https://www.top5jeuxenligne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
