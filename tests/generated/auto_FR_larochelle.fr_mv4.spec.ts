import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_larochelle.fr_mv4', ['https://www.larochelle.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
