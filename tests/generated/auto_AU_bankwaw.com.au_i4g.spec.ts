import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bankwaw.com.au_i4g', ['https://www.bankwaw.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
