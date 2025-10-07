import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pap-pediatrie.fr_8pf', ['http://pap-pediatrie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
