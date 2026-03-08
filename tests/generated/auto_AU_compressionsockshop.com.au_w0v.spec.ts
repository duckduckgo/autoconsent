import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_compressionsockshop.com.au_w0v', ['https://compressionsockshop.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
