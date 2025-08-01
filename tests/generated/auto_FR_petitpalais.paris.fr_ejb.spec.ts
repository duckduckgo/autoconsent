import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_petitpalais.paris.fr_ejb', ['https://www.petitpalais.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
