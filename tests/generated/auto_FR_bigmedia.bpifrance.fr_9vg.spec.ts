import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bigmedia.bpifrance.fr_9vg', ['https://bigmedia.bpifrance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
