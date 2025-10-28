import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_la.spankbang.com_zc6', ['https://la.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
