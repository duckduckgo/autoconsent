import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_watch.erikalust.com_l6a', ['https://watch.erikalust.com/age-verification'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
