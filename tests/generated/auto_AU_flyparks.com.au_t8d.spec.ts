import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_flyparks.com.au_t8d', ['https://www.flyparks.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
