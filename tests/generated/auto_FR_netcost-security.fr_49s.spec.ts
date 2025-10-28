import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_netcost-security.fr_49s', ['https://www.netcost-security.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
