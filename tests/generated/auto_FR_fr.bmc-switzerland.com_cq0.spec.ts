import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.bmc-switzerland.com_cq0', ['https://fr.bmc-switzerland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
