import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_satchelone.com_q1k', ['https://www.satchelone.com/v7/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
