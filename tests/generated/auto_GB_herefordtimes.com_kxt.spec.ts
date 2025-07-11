import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_herefordtimes.com_kxt', ['https://www.herefordtimes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
