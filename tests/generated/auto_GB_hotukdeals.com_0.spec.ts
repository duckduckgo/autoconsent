import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hotukdeals.com_0', ['https://www.hotukdeals.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
