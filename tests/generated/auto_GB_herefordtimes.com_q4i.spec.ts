import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_herefordtimes.com_q4i', ['https://www.herefordtimes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
