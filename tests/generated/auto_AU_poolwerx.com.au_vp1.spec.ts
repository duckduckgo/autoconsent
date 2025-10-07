import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_poolwerx.com.au_vp1', ['https://www.poolwerx.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
