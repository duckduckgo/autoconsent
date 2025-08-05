import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_seetickets.com_0', ['https://www.seetickets.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
