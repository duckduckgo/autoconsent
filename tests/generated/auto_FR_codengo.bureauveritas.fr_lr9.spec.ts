import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_codengo.bureauveritas.fr_lr9', ['https://codengo.bureauveritas.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
