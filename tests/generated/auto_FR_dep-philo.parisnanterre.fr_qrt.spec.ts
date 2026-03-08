import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dep-philo.parisnanterre.fr_qrt', ['https://dep-philo.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
