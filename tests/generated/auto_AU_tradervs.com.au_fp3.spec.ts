import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tradervs.com.au_fp3', ['https://www.tradervs.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
