import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_herefordtimes.com_ajf', ['https://www.herefordtimes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
