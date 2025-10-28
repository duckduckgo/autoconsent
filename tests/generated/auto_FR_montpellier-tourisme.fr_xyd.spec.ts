import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_montpellier-tourisme.fr_xyd', ['https://www.montpellier-tourisme.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
