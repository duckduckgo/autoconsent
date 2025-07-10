import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_zimmermann.com_9kn', ['https://www.zimmermann.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
