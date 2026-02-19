import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rightpaw.com.au_fmv', ['https://rightpaw.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
