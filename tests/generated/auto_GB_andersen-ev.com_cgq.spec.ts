import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_andersen-ev.com_cgq', ['https://andersen-ev.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
