import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aubergenville.fr_599', ['https://aubergenville.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
