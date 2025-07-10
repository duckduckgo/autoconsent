import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_soundonsound.com_odd', ['https://www.soundonsound.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
