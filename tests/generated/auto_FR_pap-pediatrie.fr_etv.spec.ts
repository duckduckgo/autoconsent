import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pap-pediatrie.fr_etv', ['http://pap-pediatrie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
