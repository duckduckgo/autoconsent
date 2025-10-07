import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_8ballpool.com_y5j', ['https://8ballpool.com/en/shop'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
