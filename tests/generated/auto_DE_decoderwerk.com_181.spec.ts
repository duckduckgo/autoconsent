import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_decoderwerk.com_181', ['https://decoderwerk.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
