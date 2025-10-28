import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bigwphotos.com.au_v4k', ['https://www.bigwphotos.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
