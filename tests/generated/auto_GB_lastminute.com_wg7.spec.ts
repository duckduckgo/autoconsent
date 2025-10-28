import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lastminute.com_wg7', ['https://www.lastminute.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
