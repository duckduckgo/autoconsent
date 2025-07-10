import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_autoexpress.co.uk_sez', ['https://www.autoexpress.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
