import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bigmedia.bpifrance.fr_l2m', ['https://bigmedia.bpifrance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
