import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cornwallhospicecare.co.uk_js0', ['https://cornwallhospice.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
