import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fruugoaustralia.com_ifq', ['https://www.fruugoaustralia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
