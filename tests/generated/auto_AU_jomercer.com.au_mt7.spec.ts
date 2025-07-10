import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jomercer.com.au_mt7', ['https://www.jomercer.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
