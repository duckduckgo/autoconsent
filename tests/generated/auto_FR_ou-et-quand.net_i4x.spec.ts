import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ou-et-quand.net_i4x', ['https://www.ou-et-quand.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
