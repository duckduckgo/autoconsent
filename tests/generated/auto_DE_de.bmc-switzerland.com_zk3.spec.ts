import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.bmc-switzerland.com_zk3', ['https://de.bmc-switzerland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
