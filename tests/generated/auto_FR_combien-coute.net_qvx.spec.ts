import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_combien-coute.net_qvx', ['https://www.combien-coute.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
