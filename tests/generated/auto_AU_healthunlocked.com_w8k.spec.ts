import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_healthunlocked.com_w8k', ['https://healthunlocked.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
