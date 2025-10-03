import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_poolwerx.com.au_dwe', ['https://www.poolwerx.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
