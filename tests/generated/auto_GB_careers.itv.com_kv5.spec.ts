import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.itv.com_kv5', ['https://careers.itv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
