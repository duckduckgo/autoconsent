import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bookretreats.com_0', ['https://bookretreats.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
