import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_la.spankbang.com_rq3', ['https://la.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
