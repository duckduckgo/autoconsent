import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_watch.erikalust.com_rn1', ['https://watch.erikalust.com/age-verification'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
