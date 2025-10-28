import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_iccsydney.com.au_52h', ['https://iccsydney.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
