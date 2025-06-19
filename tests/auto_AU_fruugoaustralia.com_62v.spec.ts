import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_fruugoaustralia.com_62v', ['https://www.fruugoaustralia.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
