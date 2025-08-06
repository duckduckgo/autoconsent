import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wavlink.com_jr7', ['https://www.wavlink.com/en_us/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
