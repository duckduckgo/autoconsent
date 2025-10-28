import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ac-aix-marseille.fr_4rs', ['https://www.ac-aix-marseille.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
