import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_britishcustoms.com_vvk', ['https://britishcustoms.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
